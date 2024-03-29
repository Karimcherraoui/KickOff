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
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Foundation } from "@expo/vector-icons";
import { fetchOneMatche, fetchOnePlayer } from "../../features/matchesSlice";
import { addFavorie, fetchFavories, removeFavorie, toggleFavourite } from "../../features/favorieSlice";
import {styles} from "../../styles/matchCard";


const MatcheCard = () => {
  const navigate = useNavigation();
  const dispatch = useDispatch();
  const matches = useSelector((state) => state.Matches.matches);
  const leagues = useSelector((state) => state.Leagues.leagues);
const favories = useSelector((state) => state.Favories.favories); 


  const handlClick = (matchId) => {
    dispatch(fetchOneMatche(matchId));
    dispatch(fetchOnePlayer(matchId));
    navigate.navigate("MatchesDetailScreen", { matchId });
  };
  const handlClickFavorie = (matchId) => {
      dispatch(toggleFavourite(matchId));

  };
  const [value, setValue] = useState(null);

  return (
    <>
      <View style={styles.filter}>
        <LinearGradient
          colors={["#b20000", "#ff6666"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.buttonGradient}
        >
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={leagues.uniqueTournaments?.map((item) => ({
              label: item.name,
              value: item.id,
            }))}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select League"
            searchPlaceholder="Search..."
            value={value}
            onChange={(item) => {
              setValue(item.value);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color="white"
                name="Safety"
                size={20}
              />
            )}
          />
        </LinearGradient>
        <TouchableOpacity onPress={() => setValue(null)} style={styles.reset}>
          <Text style={styles.resetText}>All Matches</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.container}
        ItemSeparatorComponent={() => <View style={{ marginBottom: 20 }} />}
        data={
          value === null
            ? matches
            : matches.filter(
                (item) => item.tournament.uniqueTournament.id === value
              )
        }
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageBackground}>
            <Pressable
              onPress={() => handlClick(item.id)}
              style={styles.pressable}
            >
              <View style={styles.leagueinfo}>
                <View style={styles.infoLeague}>
                  <Image
                    source={{
                      uri: `https://api.sofascore.app/api/v1/unique-tournament/${item.tournament.uniqueTournament.id}/image`,
                    }}
                    style={styles.imageTour}
                  />
                  <Text style={styles.leagueName}>{item.tournament.name}</Text>
                </View>
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
                    <Text style={styles.nameTeam}>{item.homeTeam.name}</Text>
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

export default MatcheCard;

