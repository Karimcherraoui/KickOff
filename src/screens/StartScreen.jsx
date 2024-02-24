import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  Pressable,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { fetchMatches } from "../features/matchesSlice";
import { fetchLeagues } from "../features/leagueSlice";
import { fetchPlayer } from "../features/playerSlice";

const StartScreen = () => {
  const navigate = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMatches("2024-02-22"));
    dispatch(fetchLeagues());
    dispatch(fetchPlayer());
  }, []);
  const handleClick = () => {
    navigate.navigate("tab");
  };
  return (
    <ImageBackground
      source={require("../../assets/test.jpg")}
      style={styles.imageBackground}
    >
      <StatusBar hidden={false} barStyle={"light-content"} />
      <View style={styles.container}>
        <Pressable style={styles.button} onPress={handleClick}>
          <LinearGradient
            colors={["#202528", "#797c7e"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.buttonGradient}
          >
            <Image
              source={require("../../assets/statrtIcon.png")}
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Let's Go</Text>
          </LinearGradient>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "stretch",
    justifyContent: "center",
  },
  button: {
    width: 300,
    height: 80,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 5,
    top: 600,
    left: 150,
    borderColor: "black",
    borderWidth: 1,
  },
  buttonGradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    marginLeft: 60,
  },
  icon: {
    width: 80,
    height: 40,
    position: "absolute",
    left: 10,
    top: 25,
    marginRight: 20,
  },
});
