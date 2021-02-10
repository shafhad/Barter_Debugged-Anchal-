import React,{Component} from 'react';
import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase';


export default class customMenu extends Component {
render(){
return(
<View style = {{flex:1}}>
<View style = {styles.DI}>
<DrawerItems {...this.props}/>
</View>


<View>
<TouchableOpacity style = {styles.container} onPress = {()=>{
this.props.navigation.navigate('WelcomeScreen')
firebase.auth().signOut()
}}>
<Text style = {{fontSize:20, fontWeight:'bold', color:'black'}}>Logout!</Text>
</TouchableOpacity>
</View>

</View>
)
}
}

const styles = StyleSheet.create({
container:{
justifyContent:'center',
padding:10,
height:30,
width:'100%'
},
DI:{
flex:1,
backgroundColor:'white'
},
})