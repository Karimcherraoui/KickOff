import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {styles} from "../../styles/matchDetailCard";


const MatchDetailCard = () => {

  const matche = useSelector((state) => state.Matches.oneMatche);
  const player = useSelector((state) => state.Matches.players);

  if (!matche) {
    return <Text>Loading...</Text>; // Handle case where matche is null
  }
  const home = player?.filter(
    (item) => item.incidentType === "goal" && item.isHome === true
  );
  const away = player?.filter(
    (item) => item.incidentType === "goal" && item.isHome === false
  );

  return (
    <ScrollView>
      <View style={styles.league}>
        <Image
          source={{
            uri: `https://api.sofascore.app/api/v1/unique-tournament/${matche.tournament.uniqueTournament.id}/image`,
          }}
          style={styles.imageTour}
        />
        <Text>{matche?.tournament.name}</Text>
      </View>
      <View style={styles.detail}>
        <Text style={styles.textTemp}>
          {new Date(matche.startTimestamp * 1000).toLocaleString()}
        </Text>
        <View style={styles.teams}>
          <View style={styles.match}>
            <View style={styles.team}>
              <Image
                source={{
                  uri: `https://api.sofascore.app/api/v1/team/${matche.homeTeam.id}/image`,
                }}
                style={styles.image}
              />
              <Text style={styles.nameMatch}>{matche.homeTeam.name}</Text>
            </View>
          </View>
          <Text style={styles.resultat}>
            <Text>{matche.homeScore.display}</Text> -
            <Text>{matche.awayScore.display}</Text>
          </Text>
          <View style={styles.match}>
            <View style={styles.team}>
              <Image
                source={{
                  uri: `https://api.sofascore.app/api/v1/team/${matche.awayTeam.id}/image`,
                }}
                style={styles.image}
              />
              <Text style={styles.nameMatch}>{matche.awayTeam.name}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.round}>{matche.roundInfo.name}</Text>
      </View>

      <View style={styles.league}>
        <Text>Season</Text>
      </View>
      <View style={styles.detail}>
        <Text style={styles.seasonName}>{matche.season.name}</Text>
      </View>
      <View style={styles.league}>
        <Text>Butteur</Text>
      </View>
      <View style={styles.detailButteur}>
        <View style={styles.butteurs}>
        <View style={styles.separator}>
  {home?.length > 0 ? (
    home?.map((item) => (
      <View style={styles.butteurContianer} key={item.id}>
        <FontAwesome name="soccer-ball-o" size={15} color="black" />
        <Text style={styles.butteur}>{item.player.name}</Text>
        <Text style={styles.butteur}>{item.time}'</Text>
      </View>
    ))
  ) : (
    <Text style={styles.butteur}>Pas de butteur</Text>
  )}
</View>
          <View>
            {away?.map((item) => (
              <View style={styles.butteurContianer} key={item.id}>
                <FontAwesome name="soccer-ball-o" size={15} color="black" />
                <Text style={styles.butteur}>{item.player.name}</Text>
                <Text style={styles.butteur}>{item.time}'</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
      <View style={styles.league}>
        <Text>Entraineurs</Text>
      </View>

      <View style={styles.entraineurs}>
        <View style={styles.coach}>
          <MaterialCommunityIcons name="human-edit" size={26} color="green" />
          <Text style={styles.coachName}>{matche.homeTeam.manager.name}</Text>
        </View>

        <View style={styles.coach}>
          <MaterialCommunityIcons name="human-edit" size={26} color="green" />
          <Text style={styles.coachName}>{matche.awayTeam.manager.name}</Text>
        </View>
      </View>

      <View style={styles.league}>
        <Text>Stade</Text>
      </View>
      <ImageBackground
        style={styles.stade}
        source={require("../../../assets/stade.jpeg")}
      >
        {/* <View style={styles.stadeContainer}> */}
        <Text style={styles.stadiumName}>
          {matche.homeTeam.venue.stadium.name}
        </Text>
        {/* </View> */}
      </ImageBackground>
    </ScrollView>
  );
};

export default MatchDetailCard;

