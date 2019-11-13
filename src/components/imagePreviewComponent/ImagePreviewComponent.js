import React, { Component } from 'react';
import {
  View, Dimensions
} from 'react-native';

import styles from './ImagePreviewStyles';
import { SliderBox } from 'react-native-image-slider-box';
import { FastImage } from 'react-native-fast-image';

const { height, width } = Dimensions.get('window');

var userImageArray = [
  {
    "id": "8R5VNRVS2rc",
    "created_at": "2019-07-07T10:09:18-04:00",
    "updated_at": "2019-10-21T01:12:18-04:00",
    "urls": {
      "raw": "https://images.unsplash.com/photo-1562508548-69377b81ab9e?ixlib=rb-1.2.1",
      "full": "https://images.unsplash.com/photo-1562508548-69377b81ab9e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb",
      "regular": "https://images.unsplash.com/photo-1562508548-69377b81ab9e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      "small": "https://images.unsplash.com/photo-1562508548-69377b81ab9e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
      "thumb": "https://images.unsplash.com/photo-1562508548-69377b81ab9e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max"
    }
  },
  {
    "id": "4-38745E0NY",
    "created_at": "2019-08-04T11:51:34-04:00",
    "updated_at": "2019-10-02T14:35:51-04:00",
    "urls": {
      "raw": "https://images.unsplash.com/photo-1564933862606-7ab4c8246d20?ixlib=rb-1.2.1",
      "full": "https://images.unsplash.com/photo-1564933862606-7ab4c8246d20?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb",
      "regular": "https://images.unsplash.com/photo-1564933862606-7ab4c8246d20?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      "small": "https://images.unsplash.com/photo-1564933862606-7ab4c8246d20?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
      "thumb": "https://images.unsplash.com/photo-1564933862606-7ab4c8246d20?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max"
    }
  },
  {
    "id": "sMOvg1iAdbY",
    "created_at": "2019-06-10T12:18:46-04:00",
    "updated_at": "2019-10-02T14:11:34-04:00",
    "urls": {
      "raw": "https://images.unsplash.com/photo-1560183483-bbe280f51428?ixlib=rb-1.2.1",
      "full": "https://images.unsplash.com/photo-1560183483-bbe280f51428?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb",
      "regular": "https://images.unsplash.com/photo-1560183483-bbe280f51428?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
      "small": "https://images.unsplash.com/photo-1560183483-bbe280f51428?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
      "thumb": "https://images.unsplash.com/photo-1560183483-bbe280f51428?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max"
    }
  }
];
var imageArray = [];

export default class ImagePreviewComponent extends Component {
  constructor(props) {
    super(props);
    var tempArray = [];
    userImageArray.forEach(imageObject => {
      tempArray.push(imageObject['urls']['full']);
    });
    console.log('tempArray ', tempArray);

    this.state = {
      imageArray: tempArray
    };
  }



  render() {
    return (
      <View style={styles.container}>
        <SliderBox
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
