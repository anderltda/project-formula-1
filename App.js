import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './pages/home';
import Race from './pages/race';
import Driver from './pages/driver';
import Choose from './pages/choose';

const AppNavigator = createStackNavigator({
    Home: {
        screen: Home,
    },
    Race: {
        screen: Race,
	},
	Driver: {
        screen: Driver,
	},
	Choose: {
        screen: Choose,
    },
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#ccc',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    },
});

export default createAppContainer(AppNavigator);