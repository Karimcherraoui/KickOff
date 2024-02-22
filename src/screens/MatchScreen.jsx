import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import Matches from '../components/card/MatcheCard'

const MatchScreen = () => {
  return (
    <ImageBackground style={styles.background} source={require('../../assets/images.jpeg')}>
    <Matches />
    </ImageBackground>
  )
}

export default MatchScreen
const styles = StyleSheet.create({

  background: {
    flex: 1,
    backgroundColor: "#fff",
    resizeMode: "cover",
    justifyContent: "center"
  },
});
