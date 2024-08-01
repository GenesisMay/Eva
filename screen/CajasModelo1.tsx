import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const CajasModelo1 = () => {
  return (
    <View style={styles.container}>
        <View style={styles.boxPurple}></View>
        <View style={styles.boxYellow}></View>
        <View style={styles.bowGreen}></View>
    </View>
  )
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 50,
        backgroundColor: 'orange',
    },

    boxPurple:{
        width:100,
        height:100,
        backgroundColor:'purple',
        borderWidth:10,
        borderColor:'white',
        position:'absolute',
        top: 0,
        right:0
        
    },

    boxYellow:{
        width:100,
        height:100,
        backgroundColor:'yellow',
        borderWidth:10,
        borderColor:'white',
        position:'absolute',
        bottom:0,
        right: 0
    },

    bowGreen:{
        width:100,
        height:610,
        backgroundColor:'green',
        borderWidth:10,
        borderColor:'white',
        position:'absolute',
        bottom:0,
        right:0,
        top: 100
    }
})
