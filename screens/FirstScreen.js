import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,

} from 'react-native'


export default class FirstScreen extends Component {
    constructor(props){
super(props);
setTimeout(()=>
{
    this.props.navigation.navigate("RolleSelectionScreen");
},5000);

    }

   render(){
     return(
<View style={styles.container}>
        <Image  style ={styles.logo}  source={require('../assets/logo.png') } />
        </View>
     )

   }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
      },
    logo: {
        width: 300,
        height: 300,
        borderRadius: 100,
        position:'absolute',
        top:'30%'
        
        
    },
    
})