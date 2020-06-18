import React from 'react'
import { View } from 'react-native'
import SubBox from "../components/SubBox"

export default function Box(props) {
  return (
    <>
    <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'stretch'}}>
      {
        props.dataBoard.map((num, index) => {
          if(props.index === 0 && index < 3 || props.index === 0 && index > 5) {
            return <SubBox key={index} resolve={props.resolve[index]} num={num} color={"#ffffb8"}></SubBox>
          } else if (props.index === 1 && index < 3 || props.index === 1 && index > 5) {
            return <SubBox key={index} resolve={props.resolve[index]} num={num} color={"#ffffb8"}></SubBox>
          } else if(props.index === 2 && index < 3 || props.index === 2 && index > 5) {
            return <SubBox key={index} resolve={props.resolve[index]} num={num} color={"#ffffb8"}></SubBox>
          } else if (props.index === 3 && index > 2 && index < 6){
            return <SubBox key={index} resolve={props.resolve[index]} num={num} color={"#ffffb8"}></SubBox>
          } else if (props.index === 4 && index > 2 && index < 6){
            return <SubBox key={index} resolve={props.resolve[index]} num={num} color={"#ffffb8"}></SubBox>
          } else if (props.index === 5 && index > 2 && index < 6){
            return <SubBox key={index} resolve={props.resolve[index]} num={num} color={"#ffffb8"}></SubBox>
          } else if(props.index === 6 && index < 3 || props.index === 6 && index > 5) {
            return <SubBox key={index} resolve={props.resolve[index]} num={num} color={"#ffffb8"}></SubBox>
          } else if (props.index === 7 && index < 3 || props.index === 7 && index > 5) {
            return <SubBox key={index} resolve={props.resolve[index]} num={num} color={"#ffffb8"}></SubBox>
          } else if(props.index === 8 && index < 3 || props.index === 8 && index > 5) {
            return <SubBox key={index} resolve={props.resolve[index]} num={num} color={"#ffffb8"}></SubBox>
          } else {
            return <SubBox key={index} resolve={props.resolve[index]} num={num} color={"#bae637"}></SubBox>
          }
          })
      }
    </View>
    </>
  )
}
