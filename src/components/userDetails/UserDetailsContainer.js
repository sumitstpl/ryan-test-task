import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserDetailsComponent from './UserDetailsComponent';
import Icon from 'react-native-vector-icons/AntDesign'
class UserDetailsContainer extends Component {

  static navigationOptions = ({navigation}) => ({
    title: 'USER DETAILS',
    headerTintColor: 'black',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerLeft: (
      <Icon
        style={{ marginLeft: 43, marginTop: 5 }}
        name="arrowleft"
        size={25}
        color="black"
        onPress={() => {
          navigation.goBack();
        }}
      />
    )
  });

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
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetailsContainer);
