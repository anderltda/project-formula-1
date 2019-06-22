import React, { Component } from 'react';
import { ScrollView, Image } from 'react-native';
import { List, ListItem, Text, Button, Left, Body, Right } from 'native-base';
import { SafeAreaView } from 'react-navigation';

export default class Race extends React.Component {

	state = {
		results: [],
	};

	static navigationOptions = () => {
		return {
			title: 'Races',
		};
	}

	componentDidMount() {
		const season = this.props.navigation.getParam('season');
		this.getData(season);
	}

	renderSeasons(results) {

		let values = [];

		values.push(
			<List key={'season'}>
				<ListItem thumbnail>
					<Left>
						<Image source={require('../../assets/icon_f1.png')} />
					</Left>
					<Body>
						<Text>{results.Circuit.Location.country} - {results.Circuit.Location.locality}</Text>
						<Text note numberOfLines={1}>{results.raceName}</Text>
						<Text note>Date:<Text> {results.date}</Text></Text>
					</Body>
					<Right>
						<Button transparent>
							<Text>View</Text>
						</Button>
					</Right>
				</ListItem>
			</List>
		);

		return values;
	}

	getData__(season) {

		Promise.all([
			fetch(`http://ergast.com/api/f1/${season}.json`),
			fetch(`http://ergast.com/api/f1/${season}/drivers.json`)
		])
			.then((responses) => responses.map((response) => response.json()))
			.then((data) => {
				console.log('temporada', data[0]);
				console.log('pilotos', data[1]);
				// this.props.navigation.navigate()
			});
	}


	getData_(season) {

		let results = {};

		fetch(`http://ergast.com/api/f1/${season}.json`)
			.then((response) => {

				const response1 = response.json();

				results = response1;

				return fetch(`http://ergast.com/api/f1/${season}/drivers.json`);
			})
			.then((response) => {

				const response2 = response.json();

				results = {
					...results,
					...response2,
				}

				return results;
			})
			.catch((err) => {

			});
	}


	getData(season) {
		fetch(`http://ergast.com/api/f1/${season}.json`)
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					results: data.MRData.RaceTable.Races,
				});
			});
	}

	render() {
		const { results } = this.state
		return (
			<SafeAreaView>
				<ScrollView>
					{this.state.results.map(this.renderSeasons)}
				</ScrollView>
			</SafeAreaView>
		);
	}
}
