import React, { Component } from 'react';
import {Alert} from 'react-native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import * as Location from "expo-location";
import axios from 'axios';
import Weather from '../../Weather';
import Loading from '../../Loading';
import Search from '../../Search';

import { Icon } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class SearchTab extends Component {
    
    static navigationOptions = {
      tabBarIcon: ({ tintColor }) => (
          <Icon name='ios-search' style={{ color: tintColor }} />
      )
    }
    

  render() {
    return (
      <Search></Search>
    );
  }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});