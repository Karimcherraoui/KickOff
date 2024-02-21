import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const MatchDetail = () => {
  return (
    <View>
      <View style={styles.league}>
        <Text>League</Text>
      </View>
      <View style={styles.detail}>
        <Text style={styles.textTemp}>Date</Text>
        <View style={styles.teams}>
          <View style={styles.match}>
            <View style={styles.team}>
              <Image
                source={{
                  uri: "https://cdn.sportmonks.com/images/soccer/teams/21/53.png",
                }}
                style={styles.image}
              />
              <Text style={styles.nameMatch}>Matches</Text>
            </View>
          </View>
          <Text style={styles.vs}>Vs</Text>
          <View style={styles.match}>
            <View style={styles.team}>
              <Text style={styles.nameMatch}>Matches</Text>
              <Image
                source={{
                  uri: "https://cdn.sportmonks.com/images/soccer/teams/21/53.png",
                }}
                style={styles.image}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MatchDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
  },
  league: {
    backgroundColor: "#e0e0e0",
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#cdcccc",
    fontWeight: "bold", 
    fontSize: 15, 
    color: "red", 
  },
  detail: {
    padding: 8,
    backgroundColor: "#fffbef",
    height: 300,
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
    fontSize: 20,
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
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  teams: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
  },
  vs: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
  },
});
