/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation'
import ListingScreen from './src/screens/ListingScreen'
import FilterScreen from './src/screens/FilterScreen'
const RootStack = StackNavigator(
  {
    Home: {
      screen: ListingScreen,
    },
    Filters: {
      screen: FilterScreen
    }
  },
  {
    initialRouteName: 'Home',
  }
);

import { Sentry } from 'react-native-sentry';

Sentry.config('https://a2e7562b3c414b3aba87a6961803fc0a:c6537a3b9ff54ffe9dd5271a3a5b4691@sentry.io/625179').install();


export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
