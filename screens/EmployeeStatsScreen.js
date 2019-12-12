import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Platform } from 'react-native';

export default function EmployeeStatsScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return <ExpoConfigView />;
}

EmployeeStatsScreen.navigationOptions = {
  title: 'Who Is?',
  headerTitleStyle: Platform.OS === 'android' ? { flex: 1, textAlign: 'center'} : null
};
