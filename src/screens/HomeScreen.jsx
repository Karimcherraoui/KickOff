import { View, Text, StyleSheet } from "react-native";
import MatchesCard from "../components/card/MatcheCard";
import React from "react";

const HomeScreen = () => {
  return (
    <View styl={styles.container}>
      <MatchesCard />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
  },
});
