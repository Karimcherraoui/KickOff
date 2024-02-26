import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Foundation } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { fetchOneMatche, fetchOnePlayer } from "../../features/matchesSlice";
import {styles} from "../../styles/favoriCard";
import { toggleFavourite } from "../../features/favorieSlice";

const FavorieCard = () => {
  const navigate = useNavigation();
  const dispatch = useDispatch();
  const favories = useSelector((state) => state.Favories.favories);
  const matches = useSelector((state) => state.Matches.matches);
    const matchFavorie = matches.filter(({id})=> favories.includes(id))

  const handlClick = (matchId) => {
    dispatch(fetchOneMatche(matchId));
    dispatch(fetchOnePlayer(matchId));
    navigate.navigate("MatchesDetailScreen", { matchId });
  };
  const handlClickFavorie = (matchId) => {
    dispatch(toggleFavourite(matchId));
};

  return (
    <>

      <FlatList
        style={styles.container}
        ItemSeparatorComponent={() => <View style={{ marginBottom: 20 }} />}
        data={matchFavorie}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageBackground}>
            <Pressable
              onPress={() => handlClick(item.id)}
              style={styles.pressable}
            >
              <View style={styles.leagueinfo}>
                <Image
                  source={{
                    uri: `https://api.sofascore.app/api/v1/unique-tournament/${item.tournament.uniqueTournament.id}/image`,
                  }}
                  style={styles.imageTour}
                />
                <Text style={styles.leagueName}>{item.tournament.name}</Text>
                <Pressable onPress={()=>handlClickFavorie(item.id)} testID="favorie-button" >
                {favories.includes(item.id) ? (
                  <Foundation name="star" size={24} color="orange" />
                ) : (
                  <Foundation name="star" size={24} color="gray" />
                )}
                </Pressable>
              </View>
              <View style={styles.teams}>
                <View style={styles.match}>
                  <View style={styles.team}>
                    <Image
                      source={{
                        uri: `https://api.sofascore.app/api/v1/team/${item.homeTeam.id}/image`,
                      }}
                      style={styles.image}
                    />
                    <Text style={styles.nameTeam}>{item.homeTeam.country.name}</Text>
                  </View>
                </View>
                <Text style={styles.resultat}>
                  <Text>{item.homeScore.display}</Text> -
                  <Text>{item.awayScore.display}</Text>
                </Text>
                <View style={styles.match}>
                  <View style={styles.team}>
                    <Image
                      source={{
                        uri: `https://api.sofascore.app/api/v1/team/${item.awayTeam.id}/image`,
                      }}
                      style={styles.image}
                    />
                    <Text style={styles.nameTeam}>{item.awayTeam.name}</Text>
                  </View>
                </View>
              </View>

              <View style={styles.temp}>
                <Text style={styles.textTemp}>
                  {new Date(item.startTimestamp * 1000).toLocaleString()}
                </Text>
              </View>
            </Pressable>
          </View>
        )}
      /> 

    </>
  );
};

export default FavorieCard;

