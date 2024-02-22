import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
  Image,
  FlatList,
} from "react-native";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "react-native-element-dropdown";
import { fetchMatches, logMatches } from "../../features/matchesSlice";
import AntDesign from "@expo/vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const MatcheCard = () => {
  const navigate = useNavigation();
  const matches = useSelector((state) => state.Matches.matches);
  const leagues = useSelector((state) => state.Leagues.leagues);
  const handlClick = () => {
    navigate.navigate("MatchesDetailScreen");
  };
  const [value, setValue] = useState(null);

  return (
    <>
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
          data={leagues.uniqueTournaments?.map((item) => ({ label: item.name, value: item.id }))}
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

      <FlatList
        style={styles.container}
        ItemSeparatorComponent={() => <View style={{ marginBottom: 20 }} />}
        data={
          value === null
            ? matches.events
            : matches.events.filter(
                (item) => item.tournament.uniqueTournament.id === value
              )
        
        }
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageBackground}>
            <Pressable onPress={handlClick} style={styles.pressable}>
              <View style={styles.leagueinfo}>
              <Image source={
                {uri:`https://api.sofascore.app/api/v1/unique-tournament/7/image `}
              }
              style={styles.imageTour} 
              />
              <Text style={styles.leagueName}>{item.tournament.name}</Text>
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
                  <Text>{item.homeScore.display}</Text> -{" "}
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

const styles = StyleSheet.create({
  container: {
    padding: 10,

    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.1,
  },
  imageBackground: {
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
  },
  pressable: {
    padding: 20,
  },
  match: {
    flexDirection: "row",
    justifyContent: "center",
    // margin: 5,
  },
  temp: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 5,
  },
  nameTeam: {
    fontWeight: "bold",
    fontSize: 15,
    color: "black",
    width: 100,
    textAlign: "center",
  },
  textTemp: {
    fontSize: 15,
    color: "#bcbcbc",
  },
  league: {
    fontWeight: "bold",
    fontSize: 15,
    color: "red",
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
  vs: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
  },
  resultat: {
    color: "green",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },

  leagueName: {
    color: "#bcbcbc",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 10,
  },
  leagueinfo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  imageTour: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
});

