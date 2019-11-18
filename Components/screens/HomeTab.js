import React, { Component } from 'react';
import {Alert} from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import * as Location from "expo-location";
import axios from 'axios';
import Weather from '../../Weather';
import Loading from '../../Loading';
import { Container, Content, Icon, Thumbnail, Header, Left, Right, Body } from 'native-base';

const openweathermap_API_KEY = "e8073821d4d37640049c8bfcb375fcf8";

export default class HomeTab extends Component {
    
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Icon name='ios-cloud' style={{ color: tintColor }} />
    )
  }
  
  state = {
    isLoading: true,
    isLogin: false,
  };
  getWeather = async(latitude, longitude) => {
    const {
       data: {
         main :{temp},
         weather,
         name
        } } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${openweathermap_API_KEY}&units=metric`
      );
    this.setState({
      isLoading:false,
      condition: weather[0].main,
      description : weather[0].description,
      locationName: name,
      temp
    });
  };
  getLocation = async() => {
    try{
      await Location.requestPermissionsAsync();
      const {
        coords : {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude,longitude);
    } catch(error){
      Alert.alert("Can't find you.", "So sad");
    }
  }
  componentDidMount(){
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition, description, locationName } = this.state;
    return isLoading ? (
        <Loading /> 
        ) : (
        <Weather temp={Math.round(temp*10)/10} condition={condition} description={description} locationName={locationName}/>
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