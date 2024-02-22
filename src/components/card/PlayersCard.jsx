import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
  Image,
} from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";

const PlayersCard = () => {
  const navigate = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../../assets/match.jpg")}
          style={styles.imageBackground}
        >
          <Pressable
            onPress={() => navigate.navigate("PlayerDetailScreen")}
            style={styles.pressable}
          >
            <Image
              source={{
                uri: "https://cdn.sportmonks.com/images/soccer/teams/21/53.png",
              }}
              style={styles.image}
            />
            <Text style={styles.namePlayer}>Amine Pessi</Text>
          </Pressable>
        </ImageBackground>
      </View>
    </>
  );
};

export default PlayersCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.1,
  },
  imageBackground: {
    borderRadius: 10,
    overflow: "hidden",
  },
  pressable: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
    padding: 20,
  },

  namePlayer: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },

  image: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
});
