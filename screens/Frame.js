import React from 'react';
import { Button, Image, View, TouchableOpacity, Platform } from 'react-native';
import { ImagePicker } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default class ImagePickerExample extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20 }}>
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        {image
        ? <TouchableOpacity style={{ padding: 20 }}>
            <Ionicons
              name={Platform.OS === 'ios'
                ? 'ios-checkmark-circle'
                : 'md-checkmark-circle'}
              size={56}
              color={'#222'}
              onPress={this._takeImage}
            />
          </TouchableOpacity>
        : <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-around',
            padding: 50 }}>
            <Button
              title="Take a picture!"
              onPress={this._takeImage}
            />
            <Button
              title="Or use your gallery!"
              onPress={this._pickImage}
            />
          </View>
        }
      </View>
    );
  }
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  }

  _takeImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  }
}