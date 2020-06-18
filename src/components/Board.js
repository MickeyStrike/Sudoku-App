import React, {useEffect, useState} from 'react'
import { Text, StyleSheet, View, Button, StatusBar } from 'react-native'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import Box from '../components/Box'

export default function Board() {

  const state = useSelector(state => state.level)
  const navigation = useNavigation()
  const [data, setData] = useState([])
  const [resolve, setResolve] = useState([])
  const [loading, setLoading] = useState(false)

  const handleButton = () => {
    navigation.navigate("Finish Page", {fetcher})
  }

  const encodeBoard = (board) =>
  board.reduce(
    (result, row, i) =>
      result +
      `%5B${encodeURIComponent(row)}%5D${
        i === board.length - 1 ? "" : "%2C"
      }`,
    ""
  );

  const encodeParams = (params) =>
  Object.keys(params)
    .map((key) => key + "=" + `%5B${encodeBoard(params[key])}%5D`)
    .join("&");

  const fetcher = () => {
    setLoading(true)
    axios.get(`https://sugoku.herokuapp.com/board?difficulty=${state.level}`)
    .then(({ data }) => {
      const newData = data.board
      setTimeout(() => {
        setData(newData)
      }, 1000)
      return axios.post('https://sugoku.herokuapp.com/solve', encodeParams({ board: newData }))
    })
    .then(({ data }) => {
      const newData = data.solution
      setResolve(newData)
    })
    .catch(console.log)
    .finally(() => {
      setLoading(false)
    })
  }

  useEffect(() => {
    fetcher()
  }, [])

  return (
    <>
    <View style={style.board}>
      <View style={style.border}>
        <Text style={style.text}>Sudoku App</Text>
        {
          loading ? 
          <Text>Loading ...</Text> :
          data.map((dataBoard, index) => { // array 1D
            return <Box dataBoard={dataBoard} resolve={resolve[index]} key={index} index={index}/>
          })
        }
        <View style={{marginTop: 20,width: '30%', color: 'red'}}>
          <Button
            style={{marginTop: 100}}
            color='#dc3545'
            title='Submit'
            onPress={handleButton}
          />
        </View>
      </View>
    </View>
    </>
  )
}

const style = StyleSheet.create({
  border: {
    alignContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    flex: 1,
    height: 50,
    width: '100%'
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20
  },
  board: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: 'white'
  }
})
