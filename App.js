import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabNavigator from './components/BottomTabNavigator';
import * as Font from 'expo-font';
import { Rajdhani_700Bold } from '@expo-google-fonts/rajdhani'
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import LoginScreen from './screens/LoginScreen';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      fontLoaded: false
    }
  }
  async loadFonts() {
    await Font.loadAsync({
      Rajdhani_700Bold: Rajdhani_700Bold
    })
    this.setState({
      fontLoaded: true
    })
  }
  componentDidMount() {
    this.loadFonts();
  }
  render() {
    if (this.state.fontLoaded) {
      return (
        <AppContainer />
      )
    }
    return null;

  }
}


const SwitchNavigator = createSwitchNavigator({
  Login: LoginScreen,
  BottomTabs: BottomTabNavigator
})


const AppContainer = createAppContainer(SwitchNavigator)

