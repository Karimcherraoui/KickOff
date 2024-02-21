import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logMatches } from "../../features/matchesSlice";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from '@expo/vector-icons/AntDesign';
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";






const Matches = () => {
  const dispatch = useDispatch();
  const navigate = useNavigation();
  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];
  const getMatches = () => {
    dispatch(logMatches());
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
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select League"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        renderLeftIcon={() => (
          <AntDesign style={styles.icon} color="white" name="Safety" size={20} />
        )}
      />

</LinearGradient>

      <View style={styles.container}>
        <ImageBackground
          source={require("../../../assets/match.jpg")}
          style={styles.imageBackground}
        >
          <Pressable onPress={()=>navigate.navigate('MatchDetail')} style={styles.pressable}>
            <View style={styles.teams}>
            <View style={styles.match}>
                <View style={styles.team}>
              <Image  source={{ uri: "https://cdn.sportmonks.com/images/soccer/teams/21/53.png" }}  style={styles.image}/>
              <Text style={styles.nameMatch}>Matches</Text>
                </View>
            </View>
            <Text style={styles.vs} >Vs</Text>
            <View style={styles.match}>
                <View style={styles.team}>
              <Text style={styles.nameMatch}>Matches</Text>
              <Image  source={{ uri: "https://cdn.sportmonks.com/images/soccer/teams/21/53.png" }}  style={styles.image}/>
                </View>
            </View>
            </View>

            <View style={styles.temp}>
              <Text style={styles.textTemp}>2006-03-25 16:00:00</Text>
            </View>
          </Pressable>
        </ImageBackground>
      </View>
    </>
  );
};

export default Matches;

const styles = StyleSheet.create({
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
    padding: 20,
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
    color: "white",
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
    color: 'white',
    },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'white',
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
    borderBottomColor: 'gray',
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
