import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      padding: 10,
      marginBottom: 10,
      borderRadius: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.1,
    },
    imageBackground: {
      borderRadius: 10,
      overflow: "hidden",
    },
    pressable: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      padding: 20,
    },
  
    namePlayer: {
      fontWeight: "bold",
      fontSize: 20,
      color: "white",
      backgroundColor: "black",
      padding: 10,
      borderWidth: 1,
      borderColor: "white",
      borderRadius: 10,
    },
  
    image: {
      width: 70,
      height: 70,
      borderRadius: 25,
      backgroundColor: "white",
  
    },
  });
  