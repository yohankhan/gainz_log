import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './screens/Main';
import Profile from './screens/Profile';
import Setup from './screens/Setup';

const Rootstack = createStackNavigator(
	{
		PROFILE: {
			screen: Profile,
			navigationOptions: {
				headerShown: false
			}
		},
		SETUP: {
			screen: Setup,
			navigationOptions: {
				headerShown: false
			}
		},
		MAIN: {
			screen: Main,
			navigationOptions: {
				headerShow: false
			}
		}
	},
	{
		initialRouteName: 'SETUP'
	}
);

const Appcontainer = createAppContainer(Rootstack);

export default function App() {
	return <Appcontainer />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
