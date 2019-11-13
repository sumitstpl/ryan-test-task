import React, { useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import styles from './SplashScreenStyle';
import NavigationService from '../../services/navigationService';

function SplashScreen(props) {
  useEffect(() => {
    setTimeout(() => {
      const { navigation } = props;
      NavigationService.navigateAndReset('Home', navigation);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Ryan Test Task </Text>
    </View>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashScreen);
