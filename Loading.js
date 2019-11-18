import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
        <Text style={styles.text}>Getting the Data...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 50,
    paddingVertical: 200,
    backgroundColor : "#eeeeee",
  },
  text: {
    color: "#262626",
    fontSize: 30,
    textAlign:'center',
  }
});
