import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './component/login/login'
import Navigator from './component/Navigator/navigator'

export default class App extends Component {

  state = {
    token:null,
    pseudo:null
  }

  render(){
    return (
      <View style={styles.container}>
        <StatusBar style="auto"/>
        {this.state.token == null ? <Login isLogin={(token, pseudo)=>{this.setState({token:token, pseudo:pseudo})}}/> : <Navigator disconnect={()=>{this.setState({token:null, pseudo:null})}} token={this.state.token} pseudo={this.state.pseudo}></Navigator>}
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
