import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import mapScreen from '../screens/mapScreen';
import studentList from '../screens/studentList';
import Notifications from '../screens/Notifications';
import SettingsScreen from '../screens/SettingsScreen';


const MapsStack = createStackNavigator({
  Map: mapScreen,
});

MapsStack.navigationOptions = {
  tabBarLabel: 'Map',
  tabBarIcon: ({ focused }) => (

    <TabBarIcon
      focused={focused}
      name={
        'md-navigate'
        // Platform.OS === 'ios' ? 'ios-link' : 'md-link'
      }
    />
    
  ),
};

const studentListStack = createStackNavigator({
  studentList: studentList,
});

studentListStack.navigationOptions = {
  tabBarLabel: 'Student List',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}`: 'md-information-circle'
      }
    />
  ),
};



const notificationStack = createStackNavigator({
  Notifications: Notifications,
});

notificationStack.navigationOptions = {
  tabBarLabel: 'Notifications',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}`: 'md-information-circle'
      }
    />
  ),
};



const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  MapsStack,
  studentListStack,
  notificationStack,
  SettingsStack,
});
