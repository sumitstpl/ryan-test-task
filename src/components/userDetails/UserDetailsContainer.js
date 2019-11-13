import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserDetailsComponent from './UserDetailsComponent';

class UserDetailsContainer extends Component {

  static navigationOptions = {
    title: 'User Details',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { selectedUserData } = this.props.navigation.state.params;
    return (
      <UserDetailsComponent {...this.props} userDetails={selectedUserData}/>
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
)(UserDetailsContainer);
