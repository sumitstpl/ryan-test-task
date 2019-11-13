import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImagePreviewComponent from './ImagePreviewComponent';

class ImagePreviewContainer extends Component {
  static navigationOptions = {
    title: 'Image Preview',
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { selectedItem, imageData } = this.props.navigation.state.params;
    return (
      <ImagePreviewComponent selectedItem={selectedItem} imageData={imageData} />
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
)(ImagePreviewContainer);
