import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import MessageBox from './messageBox'

export default class Discussion extends Component {

  constructor(props){
    super(props)
  }

  state={
      friends:['Nathan', 'Lucas']
  }

  componentDidMount(){
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch("http://localhost:81/api/conversation?token="+this.props.token, requestOptions)
      .then(response => response.text())
      .then((result) =>{
        let json = JSON.parse(result)
        if(json.error){
          return
        }else{
          console.log(json)
          this.setState({friends:json.friends})
        }
      })
      .catch(error => console.log('error', error))
  }

  render(){

    return (
      <View style={styles.container}>
          {this.state.friends.map((pseudo, key)=>{
            return <MessageBox key={key} pseudo={pseudo}/>
          })}
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'100%',
    },
})
