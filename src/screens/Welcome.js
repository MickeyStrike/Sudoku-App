import React from 'react'
import { View, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Welcome() {

  const navigation = useNavigation()

  const handleButton = () => {
    navigation.navigate("SelectLevel Page")
  }

  return (
    <>
    <View style={style.container}>
      <View style={{...style.container,paddingTop: 0, borderTopWidth: 1, width: '100%'}}>
        <Text style={style.text}>Welcome To Sudoku App</Text>
        <TouchableOpacity style={style.button} onPress={handleButton}>
          <Text style={{color: 'white'}}>Enter Game!</Text>
        </TouchableOpacity>
      </View>
    </View>
    </>
  )
}

const style = StyleSheet.create({
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10
  },
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  button: {
    marginTop: '5%',
    alignItems: 'center',
    padding: 10,
    backgroundColor: "#dc3545",
    borderRadius: 10
  }
})