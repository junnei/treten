import React, { Component } from 'react';
import {Alert} from 'react-native';
import { View, Text, StyleSheet,Dimensions ,Image} from 'react-native';
import * as Location from "expo-location";
import axios from 'axios';
import MapView from 'react-native-maps';
import Weather from '../../Weather';
import Loading from '../../Loading';
import { Container, Content, Icon, Thumbnail, Header, Left, Right, Body } from 'native-base';

const openweathermap_API_KEY = "e8073821d4d37640049c8bfcb375fcf8";

export default class Recording extends Component {

  state = {
    isLoading: true,
    isLogin: false,
  };
  getWeather = async(latitude, longitude) => {
    const {
       data: {
         main :{temp},
         weather,
         name,
         coord: {lat},
         coord: {lon}
        } } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${openweathermap_API_KEY}&units=metric`
      );
    this.setState({
      isLoading:false,
      condition: weather[0].main,
      description : weather[0].description,
      locationName: name,
      temp,
      lat:lat,
      lon:lon,
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
  };
  componentDidMount(){
    this.getLocation();
  };
  getMapRegion = () => ({
    latitude: this.state.lat,
    longitude: this.state.lon,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  });
  calcDistance = newLatLng => {
    const { prevLatLng } = this.state;
    return haversine(prevLatLng, newLatLng) || 0;
  };
  render() {
    return (
      <MapView style={{flex:1}}
      region={this.getMapRegion()}>
        <MapView.Marker.Animated
              coordinate={new MapView.AnimatedRegion({
                latitude: this.state.lat+0.008,
                longitude: this.state.lon-0.002,
              })}
              ref={marker => { this.marker = marker; }}
              >
              
              <Image
                style={{
                width: 150,
                height: 100,
                borderRadius:50.5,
                resizeMode: 'contain',
                transform: [
                    { rotate: `${this.state.bearing}deg` }
                ],
                zIndex:3
                }}                
                source={require("../../assets/imgpreview.do.jpeg")}
              />
            </MapView.Marker.Animated>    
            <MapView.Marker.Animated
              coordinate={new MapView.AnimatedRegion({
                latitude: (this.state.lat+0.2),
                longitude: this.state.lon-0.1,
              })}
              ref={marker => { this.marker = marker; }}
              >
              
              <Image
                style={{
                width: 100,
                height: 100,
                borderRadius:37.5,
                resizeMode: 'contain',
                transform: [
                    { rotate: `${this.state.bearing}deg` }
                ],
                zIndex:3
                }}                
                source={require("../../assets/korea.jpg")}
              />
            </MapView.Marker.Animated>  
            <MapView.Marker.Animated
              coordinate={new MapView.AnimatedRegion({
                latitude: this.state.lat,
                longitude: this.state.lon,
              })}
              ref={marker => { this.marker = marker; }}
              >
              
              <Image
                style={{
                width: 140,
                height: 100,
                borderRadius:50.5,
                resizeMode: 'contain',
                transform: [
                    { rotate: `${this.state.bearing}deg` }
                ],
                zIndex:3
                }}                
                source={require("../../assets/ax.jpg")}
              />
            </MapView.Marker.Animated>  
            <MapView.Marker.Animated
              coordinate={new MapView.AnimatedRegion({
                latitude: (this.state.lat-2.5),
                longitude: this.state.lon+0.5,
              })}
              ref={marker => { this.marker = marker; }}
              >
              
              <Image
                style={{
                width: 140,
                height: 100,
                borderRadius:50.5,
                resizeMode: 'contain',
                transform: [
                    { rotate: `${this.state.bearing}deg` }
                ],
                zIndex:3
                }}                
                source={require("../../assets/expo.jpg")}
              />
            </MapView.Marker.Animated> 
            <MapView.Marker.Animated
              coordinate={new MapView.AnimatedRegion({
                latitude: (this.state.lat-1.3),
                longitude: this.state.lon-0.3,
              })}
              ref={marker => { this.marker = marker; }}
              >
              
              <Image
                style={{
                width: 100,
                height: 100,
                borderRadius:37.5,
                resizeMode: 'contain',
                transform: [
                    { rotate: `${this.state.bearing}deg` }
                ],
                zIndex:3
                }}                
                source={require("../../assets/rx.jpeg")}
              />
            </MapView.Marker.Animated> 
      </MapView>
   );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
