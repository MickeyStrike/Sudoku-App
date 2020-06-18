import React from 'react'
import { View, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import allActions from '../stores/actions/index'

export default function Select() {

  const navigation = useNavigation()
  const result = useSelector((state) => state.result)
  const dispatch = useDispatch()

  const easy = () => {
    const difficult = 'easy'
    
    let newResult = []
    newResult = [...newResult,result.result]
    newResult = -newResult[0]

    let totalCol = []
    totalCol = [...totalCol,result.totalCol]
    totalCol = -totalCol[0]

    dispatch(allActions.resultIncremet({result: newResult,totalCol}))
    dispatch(allActions.levelStage(difficult))
    navigation.navigate("Game Page")
  }
  const medium = () => {
    const difficult = 'medium'

    let newResult = []
    newResult = [...newResult,result.result]
    newResult = -newResult[0]

    let totalCol = []
    totalCol = [...totalCol,result.totalCol]
    totalCol = -totalCol[0]

    dispatch(allActions.resultIncremet({result: newResult,totalCol}))
    dispatch(allActions.levelStage(difficult))
    navigation.navigate("Game Page")
  }
  const hard = () => {
    const difficult = 'hard'

    let newResult = []
    newResult = [...newResult,result.result]
    newResult = -newResult[0]

    let totalCol = []
    totalCol = [...totalCol,result.totalCol]
    totalCol = -totalCol[0]

    dispatch(allActions.resultIncremet({result: newResult,totalCol}))
    dispatch(allActions.levelStage(difficult))
    navigation.navigate("Game Page")
  }

  return (
    <>
    <View style={style.container}>
      <View style={{...style.container,paddingTop: 0, borderTopWidth: 1, width: '100%'}}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20, marginBottom: 10}}>Select Difficulty</Text>
        <TouchableOpacity style={style.button} onPress={easy}>
          <Text style={{color: 'white'}}>Easy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={medium}>
          <Text style={{color: 'white'}}>Medium</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={hard}>
          <Text style={{color: 'white'}}>Hard</Text>
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
    width: '20%',
    marginTop: '5%',
    alignItems: 'center',
    padding: 10,
    backgroundColor: "#dc3545",
    borderRadius: 10
  }
})