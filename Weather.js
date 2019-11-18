import React from "react";
import { View, Text, StyleSheet, StatusBar,
    TouchableOpacity} from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const weatherOptions =  {
    Thunderstorm: {
        iconName:"weather-lightning-rainy",
        gradient:["#555555","#222222"],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house"
    },
    Drizzle: {
        iconName:"weather-pouring",
        gradient:["#555555","#222222"],
        title: "Drizzle",
        subtitle: "Is like rain, but gay 🏳️‍🌈"
    },
    Rain: {
        iconName:"weather-rainy",
        gradient:["#555555","#222222"],
        title: "Raining like a MF",
        subtitle: "For more info look outside"
    },
    Snow: {
        iconName:"weather-snowy",
        gradient:["#555555","#222222"],
        title: "Cold as balls",
        subtitle: "Do you want to build a snowman? Fuck no."
    },
    Mist: {
        iconName:"weather-hurricane",
        gradient:["#555555","#222222"],
        title: "Mist!",
        subtitle: "It's like you have no glasses on."
    },
    Smoke: {
        iconName:"weather-hurricane",
        gradient:["#555555","#222222"],
        title: "Smoke",
        subtitle: "Just don't go outside."
    },
    Haze: {
        iconName:"weather-hurricane",
        gradient:["#555555","#222222"],
        title: "Haze",
        subtitle: "Just don't go outside."
    },
    Dust: {
        iconName:"weather-hurricane",
        gradient:["#555555","#222222"],
        title: "Dusty",
        subtitle: "Thanks a lot China 🖕🏻"
    },
    Fog: {
        iconName:"weather-hurricane",
        gradient:["#555555","#222222"],
        title: "Fog",
        subtitle: "It's like you have no glasses on."
    },
    Sand: {
        iconName:"weather-hurricane",
        gradient:["#555555","#222222"],
        title: "Dusty",
        subtitle: "Thanks a lot China 🖕🏻"
    },
    Dust: {
        iconName:"weather-hurricane",
        gradient:["#555555","#222222"],
        title: "Dusty",
        subtitle: "Thanks a lot China 🖕🏻"
    },
    Ash: {
        iconName:"weather-hurricane",
        gradient:["#555555","#222222"],
        title: "Dusty",
        subtitle: "Thanks a lot China 🖕🏻"
    },
    Squall: {
        iconName:"weather-hurricane",
        gradient:["#555555","#222222"],
        title: "Dusty",
        subtitle: "Thanks a lot China 🖕🏻"
    },
    Tornado: {
        iconName:"weather-hurricane",
        gradient:["#555555","#222222"],
        title: "Dusty",
        subtitle: "Thanks a lot China 🖕🏻"
    },
    Clear: {
        iconName:"weather-night",
        gradient:["#a8c0ff","#3f2b96"],
        title: "너무 추워요",
        subtitle: "빨리 집에 들어가세요 😢"
    },
    Clouds: {
        iconName:"weather-cloudy",
        gradient:["#555555","#222222"],
        title: "Clouds",
        subtitle: "I know, fucking boring"
    }
}

export default function Weather({temp,condition,locationName}){
    return (
    <LinearGradient
     colors={weatherOptions[condition].gradient}
     style={styles.container}
    >
    <StatusBar barStyle="light-content" />
    <View style={styles.halfContainer}>
        <MaterialCommunityIcons
            size={128}
            name={weatherOptions[condition].iconName}
            color="white"
        />
        <Text style={styles.temp}>{temp}˚</Text>
        <Text style={styles.locationName}>{locationName}</Text>
    </View>
    <View style={styles.textContainer}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text></Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
    </View>
    </LinearGradient>
    );
}

Weather.PropTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Dust",
        "Ash",
        "Squall",
        "Tornado",
        "Clear",
        "Clouds"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    description: {
        fontSize: 32,
        color: "white"
    },
    temp: {
        fontSize: 64,
        color: "white"
    },
    locationName: {
        fontSize: 24,
        color: "white"
    },
    halfContainer: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
      color: "white",
      fontSize: 34,
      fontWeight: "800",
      marginBottom: 10,
      textAlign: "center"
    },
    subtitle: {
      fontWeight: "600",
      color: "white",
      fontSize: 24,
      textAlign: "center"
    },
    textContainer: {
      flex:1,
      alignItems: "flex-start",
      paddingHorizontal: 80,
      justifyContent: "center"
    },
    buttonArea: {
        width: '100%',
        height: hp('5%'),
    },
    button: {
        backgroundColor: "#486ABD",
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTitle: {
        color: 'white',
    },


});