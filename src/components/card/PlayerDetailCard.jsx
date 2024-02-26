import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import {styles} from "../../styles/playerDetailCard";


const PlayerDetailCard = (id) => {
  const playerID = id.playerID;
  const player = useSelector((state) =>
    state.Players.players.find((player) => player.id === playerID)
  );
  return (
    <>
      <ImageBackground    source={require("../../../assets/stade.jpeg")} style={styles.container}>
      <View style={styles.imageBack}  >
          <Image
            source={{
              uri: `${player.player_picture}`,
            }}
            style={styles.image}
          />
          <Text style={styles.playerName}>{player.player_name}</Text>
        </View>

        <View style={styles.detail}>
          <View style={styles.info}>
            <Text style={styles.position}>Position</Text>
            <Text style={styles.infoText}> {player.position_short_name}</Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.position}>Age</Text>
            <Text style={styles.infoText}> {player.age}</Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.position}>National Team</Text>
            <Text style={styles.infoText}> {player.country_name}</Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.position}>Team</Text>
            <Text style={styles.infoText}> {player.team_name}</Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.position}>Poids</Text>
            <Text style={styles.infoText}> 80 Kg</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.position}>Value</Text>
            <Text style={styles.infoText}>{player.estimated_value}</Text>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default PlayerDetailCard;

