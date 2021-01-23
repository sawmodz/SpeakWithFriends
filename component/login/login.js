import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.titre}>SpeakWithFriends</Text>

        <View style={styles.form}>
            <View>
                <Text style={styles.loginText}>Pseudo</Text>
                <TextInput style={styles.loginInput}/>
            </View>
            <View>
                <Text style={styles.loginText}>Mot De Passe</Text>
                <TextInput style={styles.loginInput} />
            </View>
        </View>
        
        <View style={styles.buttonDiv}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Connection</Text>
            </View>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Inscription</Text>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  form:{
    alignItems:'center',
    flexDirection:'column',
    width:'100%',
    textAlign:'center',
  },
  buttonDiv:{
    flexDirection:'row',
    width:'100%',
    marginVertical:15,
  },
  titre:{
    fontSize: 38,
    marginVertical:5,
  },
  loginText:{
    textAlign:'center',
    fontSize: 18,
    marginVertical:5,
  },
  loginInput:{
    borderWidth: 1,
    borderColor:'black',
    borderRadius: 125,
    paddingHorizontal:125,
    textAlign:'center',
  },
  button:{
    backgroundColor:'#00E508',
    borderRadius:19,
    paddingHorizontal: 20,
    paddingVertical: 6,
    marginHorizontal: 18,
  },
  buttonText:{
      fontSize:18,
  }
})
