import React, { Component } from 'react';
import {
  View, Text, FlatList, Image, TouchableOpacity, TextInput, ActivityIndicator
} from 'react-native';
import NavigationService from '../../services/navigationService';
import * as CONST from '../../utils/constants';
import Metrics from '../../utils/Dimensions';
import styles from './HomeStyles';
import images from '../../theme/images';

export default class HomeComponent extends Component {
  constructor(props) {
    super(props);
    
    this.getUserData();
    this.state = {
      searchText: '',
      page: 1,
      data: [
        {
          id: 0,
          name: 'john deo',
          image: 'https://dummyimage.com/300/09f/fff.png'

        },
        {
          id: 1,
          name: 'john deo',
          image: 'https://dummyimage.com/300/09f/fff.png'

        }
      ]
    };
  }

  async getUserData() {
    const data = await this.props.getUserData('prashant', 1);
    console.log('data==========', data);
  }
  onPressFilter() {
    if (this.state.searchText.length !== 0) {
      this.setState({ searchText: '', page: 1 }, () => {
        this.props.getAllProducts(1);
      });
    } else {
      NavigationService.navigate('FilterScreen', { resetPage: () => this.resetPage() });
    }
  }

  resetPage() {
    this.setState({ page: 1 });
  }

  handleLoadMore = () => {
    // if (this.state.page < 2 && this.state.searchText.length === 0) {
    //   this.setState({
    //     page: this.state.page + 1
    //   }, () => {
    //     // this.props.getAllProducts(this.state.page, this.props.filterObject);
    //   });
    // }
  };


  onSubmitProduct() {
    console.log('@@@ product============', this.state.searchText);
  }

  renderCell({item}) {
    return (
      <TouchableOpacity activeOpacity={0.8} style={styles.rowViewContainer} onPress={() => this.props.navigation.navigate('AthleteTimelineScreen', { id: item.id })}>
        <View style={styles.subContent}>
          <Image source={{ uri: item.image }} style={styles.userImg} />
          <Text style={styles.usrNameTxt}>{item.name}</Text>
        </View>
        <Image source={images.arrow} style={styles.img} />
      </TouchableOpacity>
    );
  }

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: Metrics.screenWidth * 0.87,
          alignSelf: 'center',
          backgroundColor: '#EEEEEE',
        }}
      />
    );
  }

  render() {
    const { searchText, data } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            underlineColorAndroid="transparent"
            returnKeyType="done"
            placeholder="Search users"
            value={searchText}
            autoCapitalize="none"
            onChangeText={(searchText) => { this.setState({ searchText }); }}
            onSubmitEditing={() => this.onSubmitProduct()}
            keyboardType="email-address"
            style={styles.searchInput}
          />
        </View>
        <View style={styles.listContainer}>
          <View>
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={data}
              renderItem={(item) => this.renderCell(item)}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={this.FlatListItemSeparator}
              showsHorizontalScrollIndicator={false}
              extraData={this.state}
              onEndReachedThreshold={0.1}
              onEndReached={() => this.handleLoadMore()}
            />
          </View>
        </View>
      </View>

    );
  }
}
