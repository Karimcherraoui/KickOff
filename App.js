import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tab from "./src/components/navigations/Tab";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import store from "./src/store";
import Start from "./src/screens/Start";
import MatchDetail from "./src/screens/MatchDetail";
import StackComp from "./src/components/navigations/Stack";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="start"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="start" component={Start} />
          {/* <Stack.Screen name="matchDetail" component={MatchDetail} /> */}
          <Stack.Screen name="tab" component={Tab} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
  },
});
