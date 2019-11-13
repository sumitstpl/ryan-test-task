import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from '../components/splash/SplashScreen';
import HomeContainer from '../components/home/HomeContainer';

const StackNavigator = createStackNavigator(
  {
    SplashScreen: { screen: SplashScreen },
    Home: { screen: HomeContainer }
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  }
);
export default createAppContainer(StackNavigator);
