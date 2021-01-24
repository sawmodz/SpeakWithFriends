import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './component/login/login'

export default class App extends Component {

  state = {
    token:null
  }

  render(){
    return (
      <View style={styles.container}>
        <StatusBar style="auto"/>
        {this.state.token == null ? <Login isLogin={(token)=>{this.setState({token:token})}}/> : <Text>{this.state.token}</Text>}
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
