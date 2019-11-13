import React, { Component } from 'react';
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './UserDetailsStyles';

export default class UserDetailsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemHeight: 0,
    };
  }

  _onLayout = e => {
    const width = e.nativeEvent.layout.width;
    this.setState({
      itemHeight: width / 4,
    })
  }

  _extractKey = item => {
    return item.id
  }

  _getItemLayout = (data, index) => {
    const { itemHeight } = this.state
    return { length: itemHeight, offset: itemHeight * index, index }
  }

  onItemPressed(item) {
    console.log('Pressed ####', item);
  }

  _renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.imageItemStyle} onPress={() => this.onItemPressed(item)} activeOpacity={0.8}>
        <FastImage
          style={styles.imageStyle}
          source={{
            uri: item.urls.small,
            headers: { Authorization: 'someAuthToken' },
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </TouchableOpacity>
    )
  }

  renderProfileHeader() {
    const { first_name, last_name, profile_image } = this.props.userDetails;
    return (
      <View style={styles.profileHeaderContainer}>
        <Image style={styles.userProfileStyle} source={{ uri: profile_image.medium }} />
        <Text style={styles.userNameText}>{`${first_name} ${last_name}`}</Text>
      </View>
    );
  }

  renderUserImagesView() {
    const imageData = this.props.userDetails.photos
    return (
      <View style={styles.userImagesViewContainer}>
        {
          imageData.length === 0 ?
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
              <Text>"User images not found"</Text>
            </View>
            :
            <FlatList
              onLayout={this._onLayout}
              style={{ flex: 1, }}
              columnWrapperStyle={[styles.flatListStyle, { height: this.state.itemHeight, alignSelf: 'center' },]}
              data={imageData}
              renderItem={this._renderItem}
              numColumns={3}
              keyExtractor={this._extractKey}
              getItemLayout={this._getItemLayout}
            />
        }
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderProfileHeader()}
        {this.renderUserImagesView()}
      </View>
    );
  }
}
