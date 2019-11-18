import React, { Component } from 'react';
import {Alert} from 'react-native';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,StatusBar } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { Container, Content, Icon } from 'native-base'; // Container, Content 추가로 import
import CardComponent from './Components/CardComponent'; // 카드 컴포넌트 추가

export default class Search extends Component{

state = {
    searchFeeds: [],
    toSearch : "",
    isSearch : false
}

_doSearch = (hashtag) => {
  const newToSearch = 
    {text: hashtag};

// state 업데이트
this.setState({
    toSearch: newToSearch.text,
    isSearch: true
});
}


fetchFeeds = () => {
  const data = {
      id: 1,
      jsonrpc: "2.0",
      method: "call",
      params: [
        "database_api",
        "get_discussions_by_created",
        [{ tag: this.state.toSearch, limit: 20 }]
      ]
  };
  return fetch('https://api.steemit.com', {
      method: 'POST',
      body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(res => res.result)

}


componentWillMount() {
  this.fetchFeeds().then(searchFeeds => {
      this.setState({
        searchFeeds
      })
  });
}

  render(){
    return this.state.isSearch ? (
      <Content>
      <StatusBar barStyle="dark-content" />
          {
            this.state.searchFeeds.map(feed => <CardComponent data={ feed }/>)
          }
        </Content>
      ) : (
        <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Icon style={styles.icon}
            size={256}
            name="ios-search"
            color="black"/>
        <View style={styles.formArea}/>
        <View style={styles.formArea}>
          <TextInput 
              style={styles.textForm} 
              placeholder={"Input HashTag"}
              value={this.state.toSearch}
              onChangeText={(toSearch) => this.setState({toSearch})}
            />
        </View>
        <View style={styles.buttonArea}>
            <TouchableOpacity 
                style={styles.button}
                onPress={this._doSearch}>
                <Text style={styles.buttonTitle}>Search</Text>
            </TouchableOpacity>
        </View>
      </View>
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 50,
    paddingVertical: 200,
    textAlign:'center',
  },
  text: {
    color: "#262626",
    fontSize: 30,
    textAlign:'center',
  },
  icon: {
    color: "#262626",
    fontSize: 128,
    textAlign:'center',
  },
  formArea: {
      width: '100%',
      paddingBottom: wp('5%'),
  },
  textForm: {
      fontSize:18,
      borderWidth: 0.5,
      borderColor: '#888',
      width: '100%',
      height: hp('5%'),
      paddingLeft: 5,
      paddingRight: 5,
      marginBottom: 5,
      textAlign:"center",
  },
  buttonArea: {
      width: '100%',
      height: hp('5%'),
  },
  button: {
      backgroundColor: "#46c3ad",
      width: "100%",
      height: "100%",
      justifyContent: 'center',
      alignItems: 'center',
  },
  buttonTitle: {
      fontSize:20,
      fontWeight:'800',
      color: 'white',
  }
});
