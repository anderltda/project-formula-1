import React, { PureComponent } from 'react';
import { View, ScrollView } from 'react-native';
import { Button, Text } from 'native-base';

import style from './style';

class Seasons extends PureComponent {

	renderSeasons() {

		let items = [];

		for (let i = 0; i < 19; i++) {
			const year = '20' + (i > 9 ? i : `0${i}`);
			items.push(
				<Button style={style.button} onPress={() => this.props.handleParam(year)}
					key={`season-${i}`} block light>
					<Text style={style.text}>
						{year}
					</Text>
				</Button>
			);
		}

		return items;
	}

	render() {
		return (
			<View style={style.container}>
				<ScrollView>
					{this.renderSeasons()}
				</ScrollView>
			</View>
		);
	}
}

export default Seasons;