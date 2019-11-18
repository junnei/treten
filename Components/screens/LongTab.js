import React, { Component } from 'react';
import {Alert} from 'react-native';
import { View, Text, StyleSheet, ScrollView ,TouchableOpacity,TouchableHighlight} from 'react-native';
import * as Location from "expo-location";
import axios from 'axios';
import Recording from './Recording';
import Loading from '../../Loading';
import { LinearGradient } from "expo-linear-gradient";
import { Container, Content, Icon, Thumbnail, Header, Left, Right, Body } from 'native-base';




import CardComponent from '../CardComponent'; // 카드 컴포넌트 추가

const openweathermap_API_KEY = "e8073821d4d37640049c8bfcb375fcf8";

export default class LongTab extends Component {
    
  state = {
    feeds: [],
    toSearch : "",
    isSearch : false,
    isRecord : false
}
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Icon name='ios-home' style={{ color: tintColor }} />
    )
  }

  fetchFeeds = (isSearch,toSearch) => {
    const data = {
        id: 1,
        jsonrpc: "2.0",
        method: "call",
        params: [
          "database_api",
          "get_discussions_by_created",
          [{ tag: isSearch ? (toSearch) : ("travel"), limit: 20 }]
        ]
    };
    this.setState({toSearch:"",isSearch:false});
    return fetch('https://api.steemit.com', {
        method: 'POST',
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => res.result)
}


componentWillMount() {
    this.fetchFeeds(this.state.isSearch,this.state.toSearch).then(feeds => {
        this.setState({
          feeds
        })
    });
}
_doRecording(){
    this.setState({isRecord:true});
}

  render() {
      console.log(this.state.isRecord);
    return (this.state.isRecord ? (<Recording></Recording>) :
    (    
    <Container style={{flex:1}}>
        <Header style={{marginTop:10}}>
            <Left><TouchableOpacity onPress={(isRecord)=>{this._doRecording(isRecord)}}>
        <View>
        <Icon name='ios-paper-plane' style={{ paddingLeft:30 }}/></View></TouchableOpacity></Left>
        <Body><Text style={{ fontSize:17,fontWeight: 'bold' }}>Treten</Text></Body>
            
        <Right><Icon name='ios-chatbubbles' style={{ color:"black", paddingRight:30 }}/></Right>
        </Header>
        <Content>
        <View style={{ height: 100 }}>
            <View style={{ flex: 1, flexDirection: 'row', margin:(20,5,5,5), justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 7 }}>
                <Text style={{ fontWeight: 'bold' }}>Stories</Text>

                <View style={{flexDirection:'row','alignItems':'center'}}>
                    <Icon name="md-play" style={{fontSize:14}}></Icon>
                    <Text style={{fontWeight:'bold'}}> Watch All</Text>
                </View>
            </View>
            <View style={{ flex: 3 }}>
                <ScrollView 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                    alignItems: 'center',
                    paddingStart: 5,
                    paddingEnd: 5
                    }}>
                    <Thumbnail 
                        style={{ marginHorizontal: 5, borderColor: 'green', borderWidth: 2 }}
                        source={{uri: 'https://steemitimages.com/u/g9g/avatar' }} />
                    <Thumbnail 
                        style={{ marginHorizontal: 5, borderColor: 'green', borderWidth: 2 }}
                        source={{uri: 'https://steemitimages.com/u/jacobyu/avatar' }} />
                    <Thumbnail 
                        style={{ marginHorizontal: 5, borderColor: '#d451e9', borderWidth: 2 }}
                        source={{uri: 'https://steemitimages.com/u/blockchainstudio/avatar' }} />
                    <Thumbnail 
                        style={{ marginHorizontal: 5, borderColor: '#d451e9', borderWidth: 2 }}
                        source={{uri: 'https://steemitimages.com/u/gomdory/avatar' }} />
                    <Thumbnail 
                            style={{ marginHorizontal: 5, borderColor: '#d451e9', borderWidth: 2 }}
                            source={{uri: 'https://steemitimages.com/u/bbooaae/avatar' }} />
                    <Thumbnail 
                        style={{ marginHorizontal: 5, borderColor: '#d451e9', borderWidth: 2 }}
                        source={{uri: 'https://steemitimages.com/u/codingman/avatar' }} />
                    <Thumbnail 
                        style={{ marginHorizontal: 5, borderColor: '#d451e9', borderWidth: 2 }}
                        source={{uri: 'https://steemitimages.com/u/bukio/avatar' }} />
                </ScrollView>
            </View>
        </View>
        {
            this.state.feeds.map(feed => <CardComponent data={ feed }/>)
        }
        </Content>
    </Container>
    ));
  }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});