import { View, Text } from "react-native";
import React from "react";
import PlayerDetailCard from "../components/card/PlayerDetailCard";

const PlayersDetailScreen = (id) => {

  return (
    <View >
      <PlayerDetailCard playerID={id.route.params.playerId}/>
    </View>
  );
};

export default PlayersDetailScreen;
