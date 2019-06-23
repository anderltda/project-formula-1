import React, { Component } from 'react';
import { ScrollView, Image } from 'react-native';
import { List, ListItem, Text, Left, Body, Right } from 'native-base';
import LogoTitle from '../../components/LogoTitle';
import { SafeAreaView } from 'react-navigation';

export default class Driver extends React.Component {

	state = {
		results: [],
	};

	static navigationOptions = () => {
		return {
			headerTitle: <LogoTitle />,
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
				<ListItem avatar>
					<Left>
						<Image source={require('../../assets/capacete.png')} />
					</Left>
					<Body>
						<Text>{results.givenName}</Text>
						<Text note>{results.familyName}</Text>
						<Text note>Nascimento:<Text> {results.dateOfBirth}</Text></Text>
					</Body>
					<Right>
						<Text note>{results.nationality}</Text>
					</Right>
				</ListItem>
			</List>
		);

		return values;
	}

	getData(season) {
		fetch(`http://ergast.com/api/f1/${season}/drivers.json`)
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					results: data.MRData.DriverTable.Drivers,
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
