import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Tab from './Tab'
import MatchDetail from '../../screens/MatchDetail'

const Stack = () => {
    const Stack = createNativeStackNavigator()    
  return (
    <Stack.Navigator>
        <Stack.Screen name="Tab" component={Tab} />
        <Stack.Screen name="matchDetail" component={MatchDetail} />
    </Stack.Navigator>
  )
}

export default Stack