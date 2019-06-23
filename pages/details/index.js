import React, { Component } from 'react';
import { ScrollView, Image } from 'react-native';
import { Container, Header, Title, Subtitle, Content, Text, Left, Body, Right, Card, CardItem, View } from 'native-base';
import { SafeAreaView } from 'react-navigation';
import LogoTitle from '../../components/LogoTitle';

export default class Details extends React.Component {

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
		const race = this.props.navigation.getParam('race');
		this.findDetails(season, race);
	}

	renderDetails(results) {

		let values = [];

		values.push(
			<Card key={'season'}>
				<CardItem header>
					<Text>Finish Position: {results.position}º</Text>
				</CardItem>
				<CardItem>
					<Left>
						<Image source={require('../../assets/capacete.png')} />
					</Left>
					<Body>
						<Text>{results.Driver.givenName} {results.Driver.familyName}</Text>
						<Text note>{results.Constructor.name} </Text>
					</Body>
					<Right>
						<Text note>{results.Driver.nationality}</Text>
					</Right>
				</CardItem>
				<CardItem footer>
					<Text>Grid Position: {results.grid}º</Text>
				</CardItem>
			</Card>
		);

		return values;
	}

	findDetails(season, race) {
		fetch(`http://ergast.com/api/f1/${season}/${race}/results.json`)
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					results: data.MRData.RaceTable.Races[0].Results,
				});
			});
	}


	render() {
		const { results } = this.state
		return (
			<SafeAreaView>
				<ScrollView>
					{results.map(this.renderDetails)}
				</ScrollView>
			</SafeAreaView>
		);
	}
}
