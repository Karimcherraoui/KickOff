import { View } from "react-native";
import React, { useEffect } from "react";
import MatchDetailCard from "../components/card/MatchDetailCard";
import { useDispatch } from "react-redux";
import { clearMatch } from "../features/matchesSlice";


const MatchesDetailScreen = (props) => {

  return (
      <View>
        <MatchDetailCard matchID={props.route.params.matchId}/>
      </View>
  );
};

export default MatchesDetailScreen;

