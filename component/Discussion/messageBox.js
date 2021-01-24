import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

export default class MessageBox extends Component {

  constructor(props){
    super(props)
  }

  render(){
    return (
        <View style={styles.message}>
            <View style={styles.logo}></View>
            <Text style={styles.pseudo}>{this.props.pseudo}</Text>
        </View>
)
  }
}

const styles = StyleSheet.create({
    message:{
        width:'90%',
        height:75,
        marginVertical:10,
        marginHorizontal:'5%',
        borderRadius:38,
        borderColor:'black',
        borderWidth:1
    },
    logo:{
        height:60,
        width:60,
        borderRadius:50,
        borderWidth:1,
        borderColor:'black',
        marginLeft:7.5,
        marginVertical:6
    },
    pseudo:{
        position:'relative',
        marginLeft:80,
        position:'absolute',
        marginVertical:26.5,
    }
})
