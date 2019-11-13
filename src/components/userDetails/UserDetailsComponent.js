import React, {Component} from 'react';
import {View, Image, Text, FlatList, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './UserDetailsStyles';

const getImageUrl = (id, width, height) =>
    `https://unsplash.it/${width}/${height}?image=${id}`

export default class UserDetailsComponent extends Component {
  constructor(props) {
    super(props);
    fetch('https://unsplash.it/list')
    .then(res => res.json())
    .then(this._onFetchImagesSuccess)
    .catch(this._onFetchImagesError)
    this.state = {
      itemHeight: 0,
      images: [1, 2, 3, 4, 5, 6, 7],
    };
  }

  _onFetchImagesError = () => {
    this.setState({
        error: true,
    })
}

_onFetchImagesSuccess = images => {
    this.setState({
        images,
    })
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
  const uri = getImageUrl(item.id, 100, 100);
  return (
      <TouchableOpacity style={styles.imageItemStyle} onPress={() => this.onItemPressed(item)} activeOpacity={0.8}>
          <FastImage
              style={styles.imageStyle}
              source={{
                  uri,
                  headers: { Authorization: 'someAuthToken' },
                  priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.contain}
          />
      </TouchableOpacity>
  )
}

  renderProfileHeader() {
    return (
        <View style={styles.profileHeaderContainer}>
            <Image style={styles.userProfileStyle} source={{uri: 'https://unsplash.it/400/400?image=1'}} />
            <Text style={styles.userNameText}> Kapil Kolte</Text>
        </View>
    );
}

renderUserImagesView() {
  return (
    <View style={styles.userImagesViewContainer}>
      <FlatList
          onLayout={this._onLayout}
          style={{ flex: 1 }}
          columnWrapperStyle={[styles.flatListStyle,{ height: this.state.itemHeight},]}
          data={this.state.images}
          renderItem={this._renderItem}
          numColumns={4}
          keyExtractor={this._extractKey}
          getItemLayout={this._getItemLayout}
      />
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
