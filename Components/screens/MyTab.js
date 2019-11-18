import React, { Component } from 'react';
import {Alert} from 'react-native';
import { View, Text, StyleSheet,
    TextInput, Image,
    TouchableOpacity } from 'react-native';
import * as Location from "expo-location";
import axios from 'axios';
import Weather from '../../Weather';
import Loading from '../../Loading';
import { Icon, Container, Content, Header, Left, Body, Right, Button } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import CardComponent from '../CardComponent'; // 카드 컴포넌트 추가


export default class MyTab extends Component {
    
    static navigationOptions = {
      tabBarIcon: ({ tintColor }) => (
          <Icon name='ios-person' style={{ color: tintColor }} />
      )
    }
    
  state = {
    isLogin: false,
  };

  _doLogin(){
    // do something
    this.setState({isLogin:true});
}

  render(){
    return ( this.state.isLogin ? (
        <Container style={{flex:1}}>
            <Header style={{marginTop:10}}>
                <Left><Icon name='md-person-add' style={{ paddingLeft:30 }}/></Left>
                <Body><Text style={{ fontSize:17,fontWeight: 'bold' }}>xu._n</Text></Body>         
                <Right><Icon name='ios-settings' style={{ paddingRight:30 }}/></Right>
            </Header>
            <Content>
            <View style={{flexDirection:'row', paddingTop:10}}>
                <View style={{flex:1, alignItems:'center'}}>
                <Image source={require("../../assets/sj.jpeg")}
                        style={{width:75, height:75, borderRadius:37.5,marginHorizontal: 5, borderColor: '#d451e9', borderWidth: 2 }}/>
                </View>
                <View style={{flex:3}}>
                <View style={{flexDirection:'row', margin:10, justifyContent:'space-around'}}>
                    <View style={{alignItems:'center'}}>
                    <Text style={{fontSize:18}}>7</Text>
                    <Text style={{fontSize:13, color:'gray'}}>posts</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                    <Text style={{fontSize:18}}>346</Text>
                    <Text style={{fontSize:13, color:'gray'}}>follower</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                    <Text style={{fontSize:18}}>356</Text>
                    <Text style={{fontSize:13, color:'gray'}}>following</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Button bordered dark
                            style={{flex:4, marginLeft:10, justifyContent:'center', height:30, marginTop:10}}>
                    <Text>Edit Profile</Text>
                    </Button>
                    <Button bordered dark small icon
                            style={{flex:1, marginRight:10, marginLeft:5, justifyContent:'center', height:30, marginTop:10}}>
                    <Icon name="settings" />
                    </Button>
                </View>
                </View>
            </View>
            <View style={{paddingHorizontal:10, paddingVertical:10}}>
                <Text style={{ marginLeft:20,marginBottom:8,fontWeight:'bold'}}>장성준</Text>
                <Text style={{ marginLeft:15,marginBottom:3}}>Artist | KYUNG-HEE UNIV. | 산업경영공학과</Text>
                <Text style={{ marginLeft:15}}>Blockchain/ ML / DL / Optimization</Text>
            </View>
            </Content>
        </Container>
    ) :
     (
        <View style={styles.container}>
            <View><Image source={require('../../assets/Image004.png')} style={{
        width: 350, height: 250,
        resizeMode: 'contain',justifyContent:'center', textAlign:'center'}}></Image></View>
            <View style={styles.titleArea}>
                <Text style={styles.title}>Treten</Text>
            </View>
            <View style={styles.formArea}>
                <Text style={styles.base}>당신의 발걸음을 함께합니다.
                </Text>
                <TextInput 
                    style={styles.textForm} 
                    placeholder={"ID"}/>
                <TextInput 
                    style={styles.textForm} 
                    placeholder={"Password"}/>
            </View>
            <View style={styles.buttonArea}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={this._doLogin.bind(this)}>
                    <Text style={styles.buttonTitle}>L O G I N</Text>
                </TouchableOpacity>
            </View>
        </View>
    ));
}
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingLeft: wp('10%'),
        paddingRight: wp('10%'),
        justifyContent: 'center',
    },
    titleArea: {
        width: '100%',
        padding: wp('10%'),
        alignItems: 'center',
    },
    title: {
        fontSize: wp('8%'),
        fontWeight:'800',
    },
    base: {
        fontSize: wp('5%'),
        textAlign:'center',
        alignItems: 'center',
        marginBottom: 30,
        fontWeight:'600',
    },
    formArea: {
        width: '100%',
        paddingBottom: wp('10%'),
    },
    textForm: {
        fontSize:15,
        borderWidth: 0.5,
        borderColor: '#888',
        width: '100%',
        height: hp('5%'),
        paddingLeft: 25,
        paddingRight: 5,
        marginBottom: 5,
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
    },
})