import React from 'react';
import { Text, View, ScrollView, Image } from 'react-native';

import styles from '../constants/Styles';

export default class AboutScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>About</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.aboutText}>Created for Raffles Invent Programme.</Text>
            <Text style={styles.aboutText}>React Native app by Aaron Tua</Text>
            <Text style={styles.aboutText}>ConvNet implementation by Filbert Pang</Text>
            <Text style={styles.aboutText}>With assistance from Tristan Chan</Text>
          </View>
          <View style={styles.iconContainer}>
            <Image
              source={require('../assets/images/thonkang.png')}
              style={styles.companyIcon}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
