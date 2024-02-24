import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import MatchScreen from "../../screens/MatchScreen";
import PlayerScreen from "../../screens/PlayerScreen";
import FavorieScreen from "../../screens/FavorieScreen";
import MatchesDetailScreen from "../../screens/MatchesDetailScreen";
import PlayersDetailScreen from "../../screens/PlayersDetailScreen";
import { useNavigation } from "@react-navigation/native";

const Tab = () => {
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();
  return (
    <>
      <StatusBar hidden={false} barStyle={"black"} />
      <LinearGradient
        colors={["rgba(0,8,38,1)", "rgba(37,73,115,1)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ flex: 1 }}
      >
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: "white",
            tabBarStyle: {
              backgroundColor: "transparent",
            },
            headerShown: true,
            headerLeft: () => (
              <Feather
                name="arrow-left"
                size={24}
                color="black"
                style={{ marginLeft: 20 }}
                onPress={() => {
                  navigation.navigate("MatchScreen");
                }}
              />
            ),
          }}
        >
          <Tab.Screen
            name="MatchScreen"
            component={MatchScreen}
            options={{
              tabBarIcon: () => (
                <FontAwesome name="soccer-ball-o" size={24} color="white" />
              ),
            }}
          />
          <Tab.Screen
            name="PlayerScreen"
            component={PlayerScreen}
            options={{
              tabBarIcon: () => (
                <FontAwesome name="user" size={24} color="white" />
              ),
            }}
          />
          <Tab.Screen
            name="FavorieScreen"
            component={FavorieScreen}
            options={{
              tabBarIcon: () => (
                <MaterialIcons name="favorite" size={24} color="white" />
              ),
            }}
          />
          <Tab.Screen
            name="MatchesDetailScreen"
            component={MatchesDetailScreen}
            options={{ tabBarButton: () => null }}
          />
          <Tab.Screen
            name="PlayerDetailScreen"
            component={PlayersDetailScreen}
            options={{ tabBarButton: () => null }}
          />
        </Tab.Navigator>
      </LinearGradient>
    </>
  );
};

export default Tab;
