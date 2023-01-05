import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 5000);

import AllSuitcasesScreen from "./screens/AllSuitcasesScreen";
import DetailScreen from "./screens/DetailScreen";
import CartScreen from "./screens/CartScreen";
import EmptyCartScreen from "./screens/EmptyCartScreen";
import PayScreen from "./screens/PayScreen";
import PayedScreen from "./screens/PayedScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import ShippingScreen from "./screens/ShippingScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Petrona: require("./img/petron.ttf"),
  });

  const [fontsLoaded2] = useFonts({
    Comforta: require("./img/comfort.ttf"),
  });

  const [fontsLoaded3] = useFonts({
    Satisf: require("./img/satisf.ttf"),
  });

  const onLayoutRootView = useCallback(
    async () => {
      if (fontsLoaded || fontsLoaded2 || fontsLoaded3) {
        await SplashScreen.hideAsync();
      }
    },
    [fontsLoaded],
    [fontsLoaded2],
    [fontsLoaded3]
  );

  if (!fontsLoaded || !fontsLoaded2 || !fontsLoaded3) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welkom"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="EviNite koffers"
          component={AllSuitcasesScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Meer informatie"
          component={DetailScreen}
          options={({ route }) => ({
            title: route.params.itemTitle,
            headerStyle: { backgroundColor: "#297287" },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontFamily: "Petrona",
            },
          })}
        />

        <Stack.Screen
          name="💵 Winkelkarretje"
          component={CartScreen}
          options={{
            title: "Winkelkarretje",
            headerStyle: { backgroundColor: "#297287" },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontFamily: "Petrona",
            },
          }}
        />

        <Stack.Screen
          name="🛒 Winkelkarretje"
          component={EmptyCartScreen}
          options={{
            title: "Winkelkarretje",
            headerStyle: { backgroundColor: "#297287" },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontFamily: "Petrona",
            },
          }}
        />

        <Stack.Screen
          name="ShippingScreen"
          component={ShippingScreen}
          options={{
            title: "Verzendgegevens",
            headerStyle: { backgroundColor: "#297287" },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontFamily: "Petrona",
            },
          }}
        />

        <Stack.Screen
          name="Betalen"
          component={PayScreen}
          options={{
            title: "Betaalmogelijkheden",
            headerStyle: { backgroundColor: "#297287" },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontFamily: "Petrona",
            },
          }}
        />

        <Stack.Screen
          name="Betaald"
          component={PayedScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
