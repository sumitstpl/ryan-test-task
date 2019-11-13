import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from '../components/splash/SplashScreen';
import HomeContainer from '../components/home/HomeContainer';
import UserDetailsContainer from '../components/userDetails/UserDetailsContainer';
import ImagePreviewContainer from '../components/imagePreviewComponent/ImagePreviewContainer';


const StackNavigator = createStackNavigator(
  {
    SplashScreen: { screen: SplashScreen, navigationOptions: { header: null }},
    Home: { screen: HomeContainer },
    UserDetailsContainer: { screen: UserDetailsContainer },
    ImagePreview: { screen: ImagePreviewContainer }

  },
  {
    initialRouteName: 'SplashScreen'
  }
);
export default createAppContainer(StackNavigator);
