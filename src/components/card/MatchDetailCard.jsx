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

const MatchDetailCard = () => {

  const matche = useSelector((state) => state.Matches.oneMatche);
  const player = useSelector((state) => state.Matches.players);
  console.log(matche);
  const home = player?.filter(
    (item) => item.incidentType === "goal" && item.isHome === true
  );
  const away = player?.filter(
    (item) => item.incidentType === "goal" && item.isHome === false
  );
  // console.log(player);
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
  },
  league: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#cdcccc",
    fontWeight: "bold",
    fontSize: 15,
    color: "red",
    gap: 10,
  },
  seasonName: {
    fontSize: 15,
    color: "black",
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
  },
  detail: {
    padding: 8,
    backgroundColor: "#fffbef",
    borderBottomWidth: 1,
    borderBottomColor: "#cdcccc",
  },
  match: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 50,
    margin: 5,
  },
  temp: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 5,
  },
  nameMatch: {
    fontWeight: "bold",
    fontSize: 15,
    color: "black",
  },
  textTemp: {
    fontSize: 15,
    color: "#bcbcbc",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  dropdown: {
    color: "white",
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    color: "white",
    marginLeft: 20,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  buttonGradient: {
    borderRadius: 10,
    padding: 10,
    height: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 40,
    padding: 10,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  team: {
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },
  teams: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
  resultat: {
    color: "green",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  butteurs: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  butteur: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#7a7a7a",
    marginBottom: 15,
  },
  stade: {
    width: "100%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  round: {
    color: "#bcbcbc",
    fontSize: 15,
    textAlign: "center",
    marginVertical: 15,
  },

  imageTour: {
    width: 30,
    height: 30,
  },
  butteurContianer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  stadiumName: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 200,
    padding: 10,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "orange",
  },
  entraineurs: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 30,
  },

  coach: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  coachName: {
    fontSize: 15,
    color: "gray",
    fontWeight: "bold",
  },
  
});
