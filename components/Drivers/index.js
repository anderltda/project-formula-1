import React, { PureComponent } from 'react';
import { View, Image, TouchableHighlight } from 'react-native';
import { Card, CardItem, Text, Left, Body, Right } from 'native-base';

class Drivers extends PureComponent {

	render() {
		return (
			<View>
				<Card>
					<CardItem>
						<Left>
							<Image source={require('../../assets/icon_f1.png')} />
							<Body>
								<Text>{this.props.label}</Text>
								<Text note>{this.props.value}</Text>
							</Body>
						</Left>
					</CardItem>
					<TouchableHighlight onPress={() => this.props.passingParam(`${this.props.value}`)}>
						<CardItem cardBody>
							<Image source={require('../../assets/drivers.png')} style={{ height: 250, width: null, flex: 1 }} />
						</CardItem>
					</TouchableHighlight>
					<CardItem>
						<Left>
							<Text />
						</Left>
						<Body>
							<Text />
						</Body>
						<Right>
							<Text />
						</Right>
					</CardItem>
				</Card>
			</View>
		);
	}
}

export default Drivers;