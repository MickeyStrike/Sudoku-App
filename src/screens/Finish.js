import React from 'react'
import { StyleSheet, View, Button, Text, StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import allActions from '../stores/actions/index'

export default function Finish(props) {

  const navigation = useNavigation()
  const result = useSelector((state) => state.result)
  const state = useSelector((state) => state.level)
  const dispatch = useDispatch()

  const handleButton = () => {

    let newResult = []
    newResult = [...newResult,result.result]
    newResult = -newResult[0]

    let totalCol = []
    totalCol = [...totalCol,result.totalCol]
    totalCol = -totalCol[0]

    dispatch(allActions.resultIncremet({result: newResult,totalCol}))
    props.route.params.fetcher()
    navigation.goBack()
  }

  return (
    <>
    <View style={style.container}>
      <View style={{...style.container,paddingTop: 0, borderTopWidth: 1, width: '100%'}}>
        <View style={style.card}>
          <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 24, marginBottom: '10%'}}>Congratulations!</Text>
          <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>Level: </Text>
          <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20, marginBottom: '10%'}}>{state.level}</Text>
          <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>Your Score: </Text>
          <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20, marginBottom: '10%'}}>{result.result + result.totalCol}/91 </Text>
          <Button
            color='#343a40'
            title='< Play Again >'
            onPress={handleButton}
          >
          </Button>
      </View>
      </View>
    </View>
    </>
  )
}

const style = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 10,
    height: '50%',
    width: '100%',
  },
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  }
})