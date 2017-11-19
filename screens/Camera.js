import React from 'react';
import { Button, Image, View, TouchableOpacity, Platform } from 'react-native';
import { ImagePicker } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import styles from '../constants/Styles'

export default class Camera extends React.Component {
  state = {
    image: null,
    canIdentify: false
  };

  render() {
    let { image, canIdentify } = this.state;

    if (!image) {
      return (
        <View style={styles.cameraContainer}>
          <View style={styles.imagePickerContainer}>
            <Button
              title="Take a picture!"
              onPress={this._takeImage}
            />
            <Button
              title="Or use your gallery!"
              onPress={this._pickImage}
            />
          </View>
        </View>
      )
    } else {
      if (!canIdentify) {
        return (
          <View style={styles.cameraContainer}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: image.uri }} style={styles.cameraImage} />
            </View>
            <View style={styles.circleIconsGroup}>
              <TouchableOpacity style={{ padding: 20 }}>
                <Ionicons
                  name={Platform.OS === 'ios'
                    ? 'ios-checkmark-circle'
                    : 'md-checkmark-circle'}
                  size={56}
                  color={'#222'}
                  onPress={this._identify}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{ padding: 20 }}>
                <Ionicons
                  name={Platform.OS === 'ios'
                    ? 'ios-close-circle'
                    : 'md-close-circle'}
                  size={56}
                  color={'#222'}
                  onPress={this._repick}
                />
              </TouchableOpacity>
            </View>
          </View>
        )
      } else {
        return (
          <View style={styles.cameraContainer}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: image.uri }} style={styles.cameraImage} />
            </View>
            <View style={styles.circleIconsGroup}>
              <TouchableOpacity style={{ padding: 20 }}>
                <Ionicons
                  name={Platform.OS === 'ios'
                    ? 'ios-checkmark-circle'
                    : 'md-checkmark-circle'}
                  size={56}
                  color={'#222'}
                  onPress={this._identify}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{ padding: 20 }}>
                <Ionicons
                  name={Platform.OS === 'ios'
                    ? 'ios-close-circle'
                    : 'md-close-circle'}
                  size={56}
                  color={'#222'}
                  onPress={this._repick}
                />
              </TouchableOpacity>
            </View>
          </View>
        )
      }
    }
  }

  _identify = async () => {
    let { image } = this.state;
    this.setState({ canIdentify: true });
    try {
      let response = await fetch('http://192.168.1.240:5000/classify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: 'data:image/jpeg;base64,' + image.uri })
      });
    } catch (err) {
      console.error(err);
    }
  }

  _repick = () => {
    this.setState({ image: null, canIdentify: false });
  }

  _pickImage = async () => {
    let image = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      base64: true,
    });

    if (!image.cancelled) {
      this.setState({ image, canIdentify: false });
    }
  }

  _takeImage = async () => {
    let image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      base64: true,
    });

    if (!image.cancelled) {
      this.setState({ image, canIdentify: false });
    }
  }
}