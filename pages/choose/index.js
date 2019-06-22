import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import Races from '../../components/Races';
import Drivers from '../../components/Drivers';

export default class Choose extends React.Component {

	state = {
		season: '',
	};

	constructor(props) {
		super(props);
		this.setSeasonRace = this.setSeasonRace.bind(this);
		this.setSeasonDriver = this.setSeasonDriver.bind(this);
	}

	static navigationOptions = () => {
		return {
			title: 'Choose',
		};
	}

	setSeasonRace(season) {
		this.props.navigation.navigate('Race', {
			season: season
		});
	}

	setSeasonDriver(season) {
		this.props.navigation.navigate('Driver', {
			season: season,
		});
	}

	componentDidMount() {
		const season = this.props.navigation.getParam('season');
		this.setState({ season: season });
	}

	render() {
		return (
			<SafeAreaView>
				<Races passingParam={this.setSeasonRace} label='Races' value={this.state.season}></Races>
				<Drivers passingParam={this.setSeasonDriver} label='Drivers' value={this.state.season}></Drivers>
			</SafeAreaView>
		);
	}
}

