import React, { Component } from 'react';
import { View, SafeAreaView, Platform } from 'react-native';
import { connect } from 'react-redux';
import NavigationService from '../../services/navigationService';
import AppNavigator from '../../navigators/AppNavigator';
import styles from './RootScreenStyle';

class RootScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
        <AppNavigator
          // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </View>
      </SafeAreaView>
    );
  }
}


const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootScreen);
