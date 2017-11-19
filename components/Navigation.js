import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/Home';
import CameraScreen from '../screens/Camera';
import AboutScreen from '../screens/About';

const MainTabNavigator = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Camera: {
      screen: CameraScreen,
    },
    About: {
      screen: AboutScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = Platform.OS === 'ios'
              ? `ios-home${focused ? '' : '-outline'}` : 'md-home';
            break;
          case 'Camera':
            iconName = Platform.OS === 'ios'
              ? `ios-camera${focused ? '' : '-outline'}` : 'md-camera';
            break;
          case 'About':
            iconName = Platform.OS === 'ios'
              ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle';
            break;
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  }
);

export default StackNavigator(
  {
    Main: {
      screen: MainTabNavigator,
    },
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
      headerLeft: <Ionicons
        name={Platform.OS === 'ios'
          ? 'ios-camera'
          : 'md-camera'}
        color={'#222'}
        size={32}
        style={{ padding: 20 }}
      />,
      title: 'DermaCam',
    }),
  }
);