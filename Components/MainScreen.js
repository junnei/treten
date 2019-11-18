import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'native-base'; // 추가된 코드

import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'; 
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeTab from './screens/HomeTab'
import NewTab from './screens/NewTab'
import LongTab from './screens/LongTab'
import SearchTab from './screens/SearchTab'
import MyTab from './screens/MyTab'

const AppTabNavigator = createBottomTabNavigator({
    LongTab: { screen: LongTab },
    SearchTab: { screen: SearchTab },
    NewTab: { screen: NewTab },
    HomeTab: { screen: HomeTab },
    MyTab: { screen: MyTab }
}, {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      style: {
        ...Platform.select({
          ios:{
            backgroundColor:'white',
          }
        })
      },
      iconStyle: { height: 100 },
      activeTintColor: '#000',
      inactiveTintColor: '#d1cece',
      upperCaseLabel: false,
      showLabel: false,
      showIcon: true,
    }
  });

const AppTabContainet = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {

  // navigationOptions 코드 추가
  static navigationOptions = {
    header: null
  }

  render() {
    return <AppTabContainet/>; // AppTabContainet 컴포넌트를 리턴한다.
  }
}