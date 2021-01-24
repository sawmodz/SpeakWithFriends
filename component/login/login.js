import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

export default class Login extends Component {

  constructor(props){
    super(props)
  }

  state={
    pseudo:'',
    mdp:''
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.titre}>SpeakWithFriends</Text>

        <View style={styles.form}>
            <View>
                <Text style={styles.loginText}>Pseudo</Text>
                <TextInput onChangeText={(text)=>{
                  this.setState({pseudo:text})
                }} style={styles.loginInput}/>
            </View>
            <View>
                <Text style={styles.loginText}>Mot De Passe</Text>
                <TextInput secureTextEntry={true} onChangeText={(text)=>{this.setState({mdp:text})}} style={styles.loginInput} />
            </View>
        </View>
        
        <View style={styles.buttonDiv} >
            <TouchableOpacity style={styles.button} onPress={()=>{
              if(this.state.pseudo.length != 0 && this.state.mdp.length != 0){
                console.log('Name : ' + this.state.pseudo + ', MDP : ' + this.state.mdp)

                let requestOptions = {
                  method: 'GET',
                  redirect: 'follow'
                }

                fetch("http://89.234.180.120:81/api/login?Pseudo="+this.state.pseudo+"&Mdp="+this.state.mdp+"", requestOptions)
                  .then(response => response.text())
                  .then((result) =>{
                    let json = JSON.parse(result)
                    if(json.error){
                      return
                    }else{
                      this.props.isLogin(json.token)
                    }
                  })
                  .catch(error => console.log('error', error))
              }
            }}>
              <Text style={styles.buttonText}>Connection</Text>
            </TouchableOpacity>
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
    width:290,
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
