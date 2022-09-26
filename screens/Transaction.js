import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class TransactionScreen extends Component {
    render(){
        return(
           <View style={styles.container}>
            <Text style={styles.text}> Pantalla de busqueda </Text>
           </View>
        )
    }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#CBF6FD"
  },
  text:{
    color:"#FFF",
    fontSize:30,
  }
});
