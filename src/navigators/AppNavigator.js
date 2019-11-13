import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from '../components/splash/SplashScreen';
import HomeContainer from '../components/home/HomeContainer';
import UserDetailsContainer from '../components/userDetails/UserDetailsContainer';

const StackNavigator = createStackNavigator(
  {
    SplashScreen: { screen: SplashScreen },
    Home: { screen: HomeContainer },
    UserDetailsContainer: { screen: UserDetailsContainer }
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  }
);
export default createAppContainer(StackNavigator);
