import React from 'react';
import { StyleSheet, Platform, Text } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cameraContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee', 
  },
  imageContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBar: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  contentContainer: {
    paddingTop: 30,
  },
  titleContainer: {
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  titleText: {
    fontFamily: 'roboto-light',
    fontSize: 24,
  },
  infoContainer: {
    marginTop: 16,
    marginBottom: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 8,
  },
  aboutText: {
    fontSize: 16,
    marginBottom: 6,
  },
  iconContainer: {
    alignItems: 'center',    
  },
  companyIcon: {
    height: 100,
    width: 100,
  },
  imagePickerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 120,
    marginTop: 120,
  },
  cameraImage: {
    width: 240, 
    height: 240,
  },
  circleIconsGroup: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
});

const home = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

export class MonoText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]} />;
  }
}