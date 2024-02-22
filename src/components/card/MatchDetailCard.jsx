import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const MatchDetailCard = () => {
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
        <Text style={styles.resultat}>1 - 0</Text>
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
              <Text style={styles.round}>Round</Text>
    </View>

    <View style={styles.league}>
      <Text>Season</Text>
    </View>
    <View style={styles.detail}>
    <View style={styles.butteurs}>
               
                <Text style={styles.butteur}>Season Name</Text>
              </View>
              
     </View>         
    <View style={styles.league}>
      <Text>Butteur</Text>
    </View>
    <View style={styles.detail}>
    <View style={styles.butteurs}>
                <View style={styles.separator}>
                  <Text style={styles.butteur}>Butteur</Text>
                  <Text style={styles.butteur}>Butteur</Text>
                  <Text style={styles.butteur}>Butteur</Text>
                  <Text style={styles.butteur}>Butteur</Text>

                </View>
                <View>
                <Text style={styles.butteur}>Butteur</Text>
                <Text style={styles.butteur}>Butteur</Text>
                <Text style={styles.butteur}>Butteur</Text>
                <Text style={styles.butteur}>Butteur</Text>

                </View>
              </View>
     </View>   
     <View style={styles.league}>
      <Text>Entraineurs</Text>
    </View>
    <View style={styles.detail}>
    <View style={styles.butteurs}>
                <View style={styles.separator}>
                  <Text style={styles.butteur}>Entraineur</Text>
                </View>

                <View>
                <Text style={styles.butteur}>Entraineur</Text>
                </View>
              </View>

     </View>     

      <View style={styles.league}>
      <Text>Stade</Text>
    </View>
    <View style={styles.detail}>
    <View style={styles.butteurs}>
               
                <Text style={styles.butteur}>Stade Name</Text>
              </View>
              
     </View>         
    






  </View>
);
};

export default MatchDetailCard

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
      // height: 300,
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
      gap: 30,
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
    paddingHorizontal: 60,
  },
  butteur: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#7a7a7a",
    marginBottom: 10,
  },
  separator: {
    borderRightWidth: 1,
    borderRightColor: "#7a7a7a",
    paddingRight: 90,

  },
  round: {
    color: "#bcbcbc",
    fontSize: 15,
    textAlign: "center",
    marginVertical: 15,
  },
  });
  