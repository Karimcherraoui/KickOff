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
import {styles} from "../../styles/playerCard";


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

