import React from 'react';
import { StyleSheet } from 'react-native';
import Seasons from '../../components/Seasons';
import LogoTitle from '../../components/LogoTitle';
import { SafeAreaView } from 'react-navigation';

export default class Home extends React.Component {

	static navigationOptions = () => {
		return {
			headerTitle: <LogoTitle />,
		};
	}

	constructor(props) {
		super(props);
		this.getData = this.getData.bind(this);
	}

	getData(season) {
		this.props.navigation.navigate('Choose', {
			season: season,
		});
	}

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<Seasons handleParam={this.getData}></Seasons>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	},
});