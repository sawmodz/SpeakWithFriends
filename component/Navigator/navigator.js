import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import Discussion from '../Discussion/discussion'

export default class Navigator extends Component {

  constructor(props){
    super(props)
  }

  state={
    pseudo:'',
    mdp:'',
    currentPage:'Dis',
  }

  render(){
    let getCurrentPage = ()=>{
      switch(this.state.currentPage){
        case 'Dis':
          return <Discussion token={this.props.token}/>
        case'Pro':
        return <View>
          <Text>Salut</Text>
          <Text>Pro</Text>
        </View>
      }
    }
    return (
      <View style={styles.container}>
        <View style={styles.menu}>
            <View style={styles.navBar}>
                <TouchableOpacity onPress={()=>{this.setState({currentPage:'Dis'})}}>
                    <Text style={[styles.buttonText, this.state.currentPage == 'Dis'?styles.selected:'']}>Discussion</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{this.setState({currentPage:'Pro'})}}>
                    <Text style={[styles.buttonText, this.state.currentPage == 'Pro'?styles.selected:'']}>Profil</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{this.props.disconnect()}}>
                    <Text style={[styles.buttonText, this.state.currentPage == 'Dec'?styles.selected:'']}>Deconnexion</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.mainPage}>
          {getCurrentPage()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      width:'100%',
      height:'100%'
  },
  menu:{
      backgroundColor:'#DFDFDF',
      marginTop:0,
      height:'10%',
      width:'100%'
  },
  buttonText:{
      fontSize:18,
      paddingHorizontal:'5%'
  },
  navBar:{
    flexDirection:'row',
    width:'100%',
    justifyContent: 'center',
    bottom:0,
    position:'absolute',
  },
  selected:{
    borderBottomWidth: 2,
    borderBottomColor:'black'
  },
  mainPage:{
      width:'100%',
      height:'100%'
  }
})
