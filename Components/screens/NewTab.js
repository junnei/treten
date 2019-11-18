import React, { Component } from 'react';
import {Alert} from 'react-native';
import { View, Text, StyleSheet, Image,Button,StatusBar } from 'react-native';
import Loading from '../../Loading';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import { Icon } from 'native-base';

export default class NewTab extends Component {

    static navigationOptions = {
      tabBarIcon: ({ tintColor }) => (
          <Icon name='ios-add-circle' style={{ color: tintColor }} />
      )
    }
    
  state = {
    photo: null,
  };

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
  
  render() {
    let { image } = this.state;
    console.log(image);

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar barStyle="dark-content" />
        <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 360, height: 500 }} />}
      </View>
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