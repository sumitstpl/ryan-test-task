import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';

class HomeTabContainer extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HomeComponent {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  //message: state.UserLoginReducer.message,
});

const mapDispatchToProps = (dispatch) => ({
  // userLogout: () => {
  //   return dispatch(userActions.userLogout());
  // },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeTabContainer);
