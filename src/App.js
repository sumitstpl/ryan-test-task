import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createStore from './reducers';
import RootScreen from './components/root/RootScreen';
import Spinner from './components/spinner';
import {PermissionsAndroid} from 'react-native';

const { store } = createStore();

export default class App extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }

componentDidMount() {
  this.requestCameraPermission();
}

async requestCameraPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Access Permission',
        message:
          'Systango Boilerplate needs to  access to your location ' +
          'so you can have batter experience.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the location');
    } else {
      console.log('Location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}

  /**
   * A loading indicator to show any process is under progress and UI can be blocked during that duration.
   */
  spinner() {
    return (
      <Spinner />
    );
  }

  render() {
    return (
      <Provider store={store}>
          <RootScreen />
          {this.spinner()}
      </Provider>
    );
  }
}
