import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import TaggedScreen from '../screens/TaggedScreen';
import EmployeeStatsScreen from '../screens/EmployeeStatsScreen';
import Colors from '../constants/Colors';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarOptions: { 
    activeTintColor: Colors.tabIconSelected,
    inactiveTintColor: Colors.tabIconDefault,
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-home' : 'md-home' }
    />
  ),
};

HomeStack.path = '';

const TaggedStack = createStackNavigator(
  {
    Tagged: TaggedScreen,
  },
  config
);

TaggedStack.navigationOptions = {
  
  tabBarLabel: 'Tagged',
  tabBarOptions: { 
    activeTintColor: Colors.tabIconSelected,
    inactiveTintColor: Colors.tabIconDefault,
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-clock' : 'md-clock'} />
  ),
};

TaggedStack.path = '';

const EmployeeStatsScreenStack = createStackNavigator(
  {
    Settings: EmployeeStatsScreen,
  },
  config
);

EmployeeStatsScreenStack.navigationOptions = {
  tabBarLabel: 'who-is',
  tabBarOptions: { 
    activeTintColor: Colors.tabIconSelected,
    inactiveTintColor: Colors.tabIconDefault,
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-bowtie' : 'md-bowtie'} />
  ),
};

EmployeeStatsScreenStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  TaggedStack,
  EmployeeStatsScreenStack,
});

tabNavigator.path = '';

export default tabNavigator;
