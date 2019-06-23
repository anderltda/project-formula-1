import React, { Component } from 'react';
import { ScrollView, Image } from 'react-native';
import { List, ListItem, Text, Left, Body, Right, View } from 'native-base';
import { SafeAreaView } from 'react-navigation';
import LogoTitle from '../../components/LogoTitle';
import Details from '../../components/Details';

export default class Race extends React.Component {

	state = {
		results: [],
		met: ''
	};

	constructor(props) {
		super(props);
		this.setSeasonRaceDetails = this.setSeasonRaceDetails.bind(this);
	}

	static navigationOptions = () => {
		return {
			headerTitle: <LogoTitle />,
		};
	}

	setSeasonRaceDetails(season, race) {
		this.props.navigation.navigate('Details', {
			season: season,
			race: race
		});
	}

	componentDidMount() {
		const season = this.props.navigation.getParam('season');
		this.findRaces(season);
	}

	renderRaceSeasons(results, method) {

		let values = [];

		for (let i = 0; i < results.length; i++) {
			values.push(
				<List key={i}>
					<ListItem thumbnail>
						<Left>
							<Image source={require('../../assets/icon_f1.png')} />
						</Left>
						<Body>
							<Text>{results[i].Circuit.Location.country} - {results[i].Circuit.Location.locality}</Text>
							<Text note numberOfLines={1}>{results[i].raceName}</Text>
							<Text note>Date:<Text> {results[i].date}</Text></Text>
						</Body>
						<Right>
							<Details season={results[i].season} race={results[i].round} method={method}></Details>
						</Right>
					</ListItem>
				</List>
			);
		}

		return values;
	}

	findRaces(season) {
		fetch(`http://ergast.com/api/f1/${season}.json`)
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					results: data.MRData.RaceTable.Races,
					met: this.props
				});
			});
	}

	// Formas de fazer
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

	// Formas de fazer
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

	render() {
		const { results } = this.state
		return (
			<SafeAreaView>
				<ScrollView>
					{this.renderRaceSeasons(results, this.setSeasonRaceDetails)}
				</ScrollView>
			</SafeAreaView>
		);
	}
}
