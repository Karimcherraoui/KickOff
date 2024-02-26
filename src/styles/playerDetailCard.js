import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      alignItems: "center", 
      height: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 40,
    },
    imageBack: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#5b8db0",
      padding: 30,
      width: "100%",
      borderBottomEndRadius: 40,
      borderBottomStartRadius: 40,
      shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.5,
    },
    image: {
      width: 100,
      height: 100,
      marginVertical: 20,
    },
    playerName: {
      fontSize: 20,
      fontWeight: "bold",
      color: "white",
    },
    position: {
      fontSize: 18,
      fontWeight: "bold",
      color: "gray",
      textAlign: "center",
      marginBottom: 10,
    },
  
    infoText: {
      textAlign: "center",
      color: "black",
    },
  
    detail: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      gap: 20,
    },
    info: {
      width: "40%",
      marginTop: 20,
      backgroundColor: "white",
      padding: 20,
      borderRadius: 40,
      shadowColor: "black",
      shadowOffset: {
        width: 4,
        height: 12,
      },
      shadowOpacity: 0.6,
    },
  });
  