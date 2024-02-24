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
  import { fetchOneMatche, fetchOnePlayer } from "../../features/matchesSlice";
  
  const FavorieCard = () => {
    const navigate = useNavigation();
    const dispatch = useDispatch();
    const matches = useSelector((state) => state.Matches.matches);
    const leagues = useSelector((state) => state.Leagues.leagues);
    const handlClick = (matchId) => {
      dispatch(fetchOneMatche(matchId));
      dispatch(fetchOnePlayer(matchId));
      navigate.navigate("MatchesDetailScreen",{matchId});
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
        <TouchableOpacity
          onPress={() => setValue(null)}
          style={styles.reset}
        >
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
              <Pressable onPress={() => handlClick(item.id)} style={styles.pressable}>
                <View style={styles.leagueinfo}>
                  <Image
                    source={{
                      uri: `https://api.sofascore.app/api/v1/unique-tournament/${item.tournament.uniqueTournament.id}/image`,
                    }}
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
      marginTop: 20,
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
      color: "white",
  
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
      // marginHorizontal: 40,
      padding: 10,
      width:'70%',
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
      gap: 10,
      marginBottom: 20,
    },
    imageTour: {
      width: 30,
      height: 30,
  
    },
    filter: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
      padding: 10,
    },
    reset: {
      padding: 15,
      borderRadius: 10,
      backgroundColor: "black",
      borderColor: "red",
      borderWidth: 1,
    },
    resetText: {
      color: "white",
      fontWeight: "bold",
    },
  });
  