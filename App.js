import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './component/login/login'

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <StatusBar style="auto"/>
        <Login/>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
