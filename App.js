import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './pages/home';
import Seasons from './pages/seasons';

const AppNavigator = createStackNavigator({
    Home: {
        screen: Home,
    },
    Seasons: {
        screen: Seasons,
    },
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#333',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    },
});

export default createAppContainer(AppNavigator);