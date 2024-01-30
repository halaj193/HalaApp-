import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BagItem from './src/components/BagItem';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.txt}></Text>
      <Text style={styles.txt2}> Name : Hala </Text>
      <Text style={styles.txtBirthday}>B.Day : 24/01/2005</Text>
      <Text style={styles.txtUi}>My first Ui</Text>
      <View style={styles.container}></View> */}
      <BagItem/>
    </View> 

    
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 280,
    margin: 10,
    marginBottom: 260,
    borderWidth: 1,
    fontSize: 40,
  },

  txt: {
    borderWidth: 1,
    height: 70,
    width: 70,
    backgroundColor: 'pink',
    flexDirection: 'row',
    right: 100,
    top: 50,
  },
  txt2: {
    left: 30,
    bottom: 10,
    fontSize: 20,
  },
  txtBirthday: {
    left: 35,
    fontSize: 20,
  },
  txtUi: {
    left: 5,
    top: 40,
    fontSize: 25,
  }, 
  scrollview : 
  {

  }



})