import React, { PureComponent } from 'react';
import { Button, Text } from 'native-base';

class Details extends PureComponent {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Button transparent onPress={() => this.props.method(`${this.props.season}`, `${this.props.race}`)}>
				<Text>Details</Text>
			</Button>
		);
	}
}

export default Details;