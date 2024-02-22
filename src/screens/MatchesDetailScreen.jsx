import { View } from "react-native";
import React from "react";
import MatchDetailCard from "../components/card/MatchDetailCard";


const MatchesDetailScreen = (props) => {
  console.log("matchId",  JSON.stringify( props.route.params.matchId));
  return (
      <View>
        <MatchDetailCard matchID = {props.route.params.matchId}/>
      </View>
  );
};

export default MatchesDetailScreen;

