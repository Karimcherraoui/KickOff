import { StyleSheet, ImageBackground } from "react-native";
import React, { useEffect } from "react";
import Matches from "../components/card/MatcheCard";
import { useDispatch } from "react-redux";
import { clearMatch } from "../features/matchesSlice";

const MatchScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearMatch());
    };
  }, []);
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/images.jpeg")}
    >
      <Matches />
    </ImageBackground>
  );
};

export default MatchScreen;
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#fff",
    resizeMode: "cover",
    justifyContent: "center",
  },
});
