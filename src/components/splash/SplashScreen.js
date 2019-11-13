import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import styles from './SplashScreenStyle';
import NavigationService from '../../services/navigationService';

class SplashScreen extends Component {
  componentWillMount() {
    setTimeout(() => {
      const { navigation } = this.props;
      NavigationService.navigateAndReset('Home', navigation);
    }, 1000);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Ryan Test Task </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashScreen);
