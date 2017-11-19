import React from 'react';
import { Text, View, ScrollView } from 'react-native';

import styles from '../constants/Styles';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Introduction</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Welcome to DermaCam!</Text>
            <Text style={styles.infoText}>This smart self-diagnosis app can identify skin diseases just with your camera!</Text>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Usage</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Simply swipe to the left to begin!</Text>
            <Text style={styles.infoText}>Use either your camera or gallery to choose a picture.</Text>
            <Text style={styles.infoText}>Before we can identify the image, please crop it in a 1:1 ratio.</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
