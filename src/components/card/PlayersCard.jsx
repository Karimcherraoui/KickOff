import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { clearMatch } from "../../features/matchesSlice";

const PlayersCard = () => {
  const navigate = useNavigation();

const players = useSelector((state) => state.Players.players);
const handleClick = (id) => {
  navigate.navigate("PlayerDetailScreen", { playerId: id });
}

  return (
    <ScrollView ScrollView>
      {players?.map((player) => (   
      <View style={styles.container} key={player.id}>
        <ImageBackground
          source={require("../../../assets/back.jpeg")}
          style={styles.imageBackground}
        >
          <Pressable
            onPress={() => handleClick(player.id)}
            style={styles.pressable}
          >
            <Image
              source={{
                uri: `${player.player_picture}`,
              }}
              style={styles.image}
            />
            <Text style={styles.namePlayer}>{player.player_name}</Text>
          </Pressable>
        </ImageBackground>
      </View>
        ))
      }
    </ScrollView>
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
    gap: 10,
    padding: 20,
  },

  namePlayer: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    backgroundColor: "black",
    padding: 10,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 25,
    backgroundColor: "white",

  },
});
