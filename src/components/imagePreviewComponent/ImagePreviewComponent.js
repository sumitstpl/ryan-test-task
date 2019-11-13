import React, { Component } from 'react';
import {
  View, Dimensions
} from 'react-native';

import styles from './ImagePreviewStyles';
import { SliderBox } from 'react-native-image-slider-box';
import { FastImage } from 'react-native-fast-image';

const { height, width } = Dimensions.get('window');


var imageArray = [];

export default class ImagePreviewComponent extends Component {
  constructor(props) {
    super(props);
    var tempArray = [];
    this.props.imageData.forEach(imageObject => {
      tempArray.push(imageObject['urls']['small']);
    });
  
    this.state = {
      imageArray: tempArray
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SliderBox
          ref={c => (this._slider = c)}
          currentIndex={this.props.selectedItem}
          ImageComponent={FastImage}
          sliderBoxHeight={height}
          images={this.state.imageArray}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
        />
      </View>

    );
  }
}
