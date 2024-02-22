import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const PlayerDetailCard = () => {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Image
            source={{
              uri: "https://cdn.sportmonks.com/images/soccer/teams/21/53.png",
            }}
            style={styles.image}
          />
          <Text style={styles.playerName}>Amine Pessi</Text>
        </View>

        <View style={styles.detail}>
          <View style={styles.info}>
            <Text style={styles.position}>Position</Text>
            <Text style={styles.infoText}> Attacker</Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.position}>Age</Text>
            <Text style={styles.infoText}> 20</Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.position}>National Team</Text>
            <Text style={styles.infoText}> Morocco</Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.position}>Team</Text>
            <Text style={styles.infoText}> Barcelona</Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.position}>Taille</Text>
            <Text style={styles.infoText}> 186 cm</Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.position}>Poids</Text>
            <Text style={styles.infoText}> 80 Kg</Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.position}>DOB</Text>
            <Text style={styles.infoText}> 02-02-1990</Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.position}>Value</Text>
            <Text style={styles.infoText}> 1000000</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default PlayerDetailCard;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fffbef",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 40,
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 20,
  },
  playerName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
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
    backgroundColor: "#fff9e3",
    padding: 20,
    borderRadius: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.3,
  },
});
