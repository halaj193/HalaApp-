import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BagItem = props => {
    const{brandName, year,price,designer}=props;
  return (
    <View style = {styles.card}> 
    <View style={styles.topContainer}></View> 
      <Text>BagItem</Text> 
      <Text >{'brand Name :' + brandName} </Text> 
      <Text>{'year:'+ year}</Text>

    </View>
  )
}

export default BagItem

const styles = StyleSheet.create({})