import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import MessageBox from './messageBox'

export default class Discussion extends Component {

  constructor(props){
    super(props)
  }

  state={
      friends:[],
      addFriends:''
  }

  componentDidMount(){
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch("http://89.234.180.120:81/api/conversation?token="+this.props.token, requestOptions)
      .then(response => response.text())
      .then((result) =>{
        let json = JSON.parse(result)
        if(json.error){
          return
        }else{
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
          <View style={styles.addFriends}>
            <Text style={styles.addFriendsTitle}>Commencer une conversation</Text>
            <View style={styles.inputAndButton}>
              <TextInput onChangeText={(text)=>{this.setState({addFriends:text})}} style={styles.addFriendsInput}></TextInput>
              <TouchableOpacity style={styles.buttonofinput} onPress={()=>{
                if(this.state.addFriends.length != 0 ){
                  let requestOptions = {
                    method: 'GET',
                    redirect: 'follow'
                  }
                  console.log(this.state.friends)
                  fetch("http://89.234.180.120:81/api/addConv?friend="+this.state.addFriends+"&token="+this.props.token+"", requestOptions)
                    .then(response => response.text())
                    .then((result) =>{
                      let json = JSON.parse(result)
                      if(json.error){
                        return
                      }else{
                        if(json.error)return
                        let friends = this.state.friends
                        friends.push(this.state.addFriends)
                        this.setState({friends:friends})
                      }
                    })
                    .catch(error => console.log('error', error))
                }
              }}>
                <Text style={styles.buttonofinputText}>Nouveau</Text>
              </TouchableOpacity>
            </View>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'100%',
    },
    addFriends:{
      backgroundColor:'#DFDFDF',
      width:'100%',
      height:'10%',
      position:'absolute',
      bottom:'10%',
      alignItems:'center'
    },
    addFriendsTitle:{
      fontSize:20,
    },
    addFriendsInput:{
      textAlign:'center',
      borderWidth:1,
      borderColor:'black',
      borderRadius:28,
      width:'60%',
    },
    inputAndButton:{
      marginTop:10,
      justifyContent: 'center',
      flexDirection:'row',
      width:'100%',
    },
    buttonofinput:{
      marginLeft:'5%',
      backgroundColor:'#00E508',
      borderRadius:28
    },
    buttonofinputText:{
      fontSize:18,
      padding:2,
      paddingHorizontal:10
    }
})
