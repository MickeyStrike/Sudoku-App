import React, { useState, useEffect } from 'react'
import { TextInput, View } from 'react-native'
import { useDispatch } from 'react-redux'
import allAction from '../stores/actions/index'
export default function SubBox(props) {

  const dispatch = useDispatch()

  let result = 0
  let totalCol = 0
  const backgroundColor = props.color

  const [num, setNum] = useState(props.num)
  const [resolve, setResolve] = useState(props.resolve)
  
  useEffect(() => {
    if (props.num > 0) {
      totalCol++
      dispatch(allAction.resultIncremet({result,totalCol}))
    }
  },[])

  const handleInput = (input) => {
    setNum(input)
    if(num === resolve.toString()) {
      result++
    }
    totalCol = 0
    dispatch(allAction.resultIncremet({result,totalCol}))
  }

  return (
    <>
    <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start'}}>
      <TextInput
        underlineColorAndroid={"transparent"}
        style={{ borderWidth: 1, paddingLeft: 1, marginBottom: 10, marginRight: 5, width:30, textAlign: 'center', backgroundColor, elevation: 30}}
        value={num === 0 ? '' : num.toString()}
        editable={ num === 0 ? true : false }
        onChangeText={handleInput}
      />
    </View>
    </>
  )
}
