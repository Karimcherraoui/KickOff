import { View } from "react-native";
import React, { useEffect } from "react";
import MatchDetailCard from "../components/card/MatchDetailCard";
import { useDispatch } from "react-redux";
import { clearMatch } from "../features/matchesSlice";


const MatchesDetailScreen = (props) => {
  console.log("matchId",  JSON.stringify( props.route.params.matchId));
  const matchId = props.route.params.matchId;
  const dispatch = useDispatch();
  


  return (
      <View>
        <MatchDetailCard matchID={props.route.params.matchId}/>
      </View>
  );
};

export default MatchesDetailScreen;

