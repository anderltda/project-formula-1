import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
    this.props.navigation.navigate('Seasons', {
      season: season,
      name: 'Anderson Nascimento',
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});