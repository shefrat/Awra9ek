import React, {Component} from 'react'
import {StyleSheet,Text,View,Image} from 'react-native'

export default class Splash extends Component {
  constructor (props){
  super(props)
  this.state ={timer:0}
  setInterval(()=>{
    this.setState({timer:this.state.timer +1 })
  },1000)
}

render (){
  return(
    <View style={styles.container} >

  <Image source={require('./logo.jpg')} style={styles.logo}/>
  <View style={styles.logoContainer}>
  </View>
</View>
)
}


}
const styles  =StyleSheet.create({
container:{

  backgroundColor :'white',
  flex:1,
  alignItems :'center',
  justifyContent:'center',

},
logoContainer:{
  alignItems :'center',
  justifyContent:'center',

},
title:{
  alignItems:'center',
  fontSize:40 ,
  fontWeight:'bold' ,
},
logo:{
width:200,
height:100,
}

})
