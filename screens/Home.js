import React from 'react';
import { Text, View, Image } from 'react-native';
import { WebBrowser } from 'expo';

import { Home as styles, MonoText } from '../constants/Styles';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Image
            source={require('../assets/images/icon.png')}
            style={styles.welcomeImage}
          />
        </View>

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

          <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>components/Navigation.js</MonoText>
          </View>
        </View>
      </View>
    );
  }
}
