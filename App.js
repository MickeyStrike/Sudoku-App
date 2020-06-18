import React from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Board from './src/components/Board'
import Home from './src/screens/Welcome'
import Select from './src/screens/Select'
import Finish from './src/screens/Finish'
import store from './src/stores/store'

const Stack = createStackNavigator()

export default function App () {

  return (
    <>
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome Page"
            component={Home}
            options= {{headerShown: false}}
          />
          <Stack.Screen
            name="SelectLevel Page"
            component={Select}
            options= {{headerShown: false}}
          />
          <Stack.Screen
            name="Game Page"
            component={Board}
            options= {{headerShown: false}}
          />
          <Stack.Screen
            name="Finish Page"
            component={Finish}
            options= {{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    </>
  )
}
