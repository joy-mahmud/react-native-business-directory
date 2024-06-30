import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

const home = () => {
  return (
    <SafeAreaView>
        <View style={styles.container}>
        <Text style={{textAlign:'center'}}>home</Text>
        </View>
   
      
    </SafeAreaView>
  )
}

export default home

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ddd',
        padding:50,
        textAlign:'center'
    }
})