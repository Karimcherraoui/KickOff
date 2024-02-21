import { View, Text, StyleSheet } from 'react-native'
import MatchesCard from '../components/card/Matches'
import React from 'react'

const Home = () => {
  return (
    <View styl={styles.container} >
    <MatchesCard />
</View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
    },
   
    });