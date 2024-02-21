import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Drawer from "./Drawer";
import Player from "../../screens/Player";
import Match from "../../screens/Match";
import { StatusBar } from "react-native";
import MatchDetail from "../../screens/MatchDetail";
import Matches from "../card/Matches";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Favorie from "../../screens/Favorie";

const Tab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <StatusBar hidden={false} barStyle={"black"}  />
      <LinearGradient
        colors={['rgba(0,8,38,1)', 'rgba(37,73,115,1)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ flex: 1 }}
      >
      <Tab.Navigator    screenOptions={{
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'white',
          tabBarStyle: {
            backgroundColor: 'transparent', 
          },
        }}>
        <Tab.Screen
          name="Matches"
          component={Matches}
          options={{
            tabBarIcon: () => (
              <FontAwesome name="soccer-ball-o" size={24} color="white" />
            ),
          }}
        />
        <Tab.Screen
          name="Player"
          component={Player}
          options={{
            tabBarIcon: () => (
              <FontAwesome name="user" size={24} color="white" />
            ),
          }}
        />
        <Tab.Screen
          name="Favories"
          component={Favorie}
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="favorite" size={24} color="white" />
            ),
          }}
        />
        <Tab.Screen
        name="MatchDetail"
        component={MatchDetail}
        options={{ tabBarButton: () => null }} // Hide the tab bar icon
      />
      </Tab.Navigator>
      </LinearGradient>
    </>
  );
};

export default Tab;
