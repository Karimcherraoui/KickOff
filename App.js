import { NavigationContainer } from "@react-navigation/native";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tab from "./src/components/navigations/Tab";
import { Provider } from "react-redux";
import store from "./src/store";
import StartScreen from "./src/screens/StartScreen";

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
          <Stack.Screen name="start" component={StartScreen} />
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
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
