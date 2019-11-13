import React, { Component } from 'react';
import {
  View, Text, FlatList, Image, TouchableOpacity, TextInput, ActivityIndicator
} from 'react-native';
import NavigationService from '../../services/navigationService';
import Metrics from '../../utils/Dimensions';
import styles from './HomeStyles';
import images from '../../theme/images';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/EvilIcons'

var searchResult = [];
export default class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      page: 1,
    };
  }

  async getUserData(query, page) {
    searchResult = await this.props.getUserData(query, page);
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

  onSubmitProduct(query) {
    this.setState({ searchText: query });
    const { page } = this.state;
    this.getUserData(query, page);
  }

  renderCell({ item }) {
    return (
      <TouchableOpacity activeOpacity={0.8} style={styles.rowViewContainer} onPress={() => this.props.navigation.navigate('UserDetailsContainer', { selectedUserData: item })}>
        <View style={styles.subContent}>
          <FastImage
            style={styles.imageStyle}
            source={{
              uri: item.profile_image.small,
              headers: { Authorization: 'someAuthToken' },
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.contain}
            style={styles.userImg}
          />
          <Text style={styles.usrNameTxt}>{item.first_name}</Text>
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
    const { searchText } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            underlineColorAndroid="transparent"
            returnKeyType="done"
            placeholder="Search users"
            value={searchText}
            autoCapitalize="none"
            onChangeText={(text) => this.onSubmitProduct(text)}
            keyboardType="default"
            style={styles.searchInput}
          />
          <Icon
            style={{ position: 'absolute', right: 10 }}
            name="search"
            size={25}
            color="black"
            onPress={() => {
              this.onSubmitProduct(this.state.searchText);
            }}
          />  
        </View>
        <View style={styles.listContainer}>
          <View>
            {
              searchResult.results === 0 ?
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color : '#000' }}>"User images not found"</Text>
                </View>
                :
                <FlatList
                  keyExtractor={(item, index) => index.toString()}
                  data={searchResult.results}
                  renderItem={(item) => this.renderCell(item)}
                  showsVerticalScrollIndicator={false}
                  ItemSeparatorComponent={this.FlatListItemSeparator}
                  showsHorizontalScrollIndicator={false}
                  extraData={this.state}
                  keyboardShouldPersistTaps='handled'
                />
            }
          </View>
        </View>
      </View>

    );
  }
}
