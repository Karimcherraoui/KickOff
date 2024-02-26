import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
      width: "70%",
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
        alignItems: "center",
        justifyContent: "space-between",
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
  