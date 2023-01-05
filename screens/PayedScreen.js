import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useFonts } from "expo-font";

const PayedScreen = ({ navigation, route }) => {
  const [fontsLoaded] = useFonts({
    Satisf: require("../img/satisf.ttf"),
  });

  const [fontsLoaded2] = useFonts({
    Comforta: require("../img/comfort.ttf"),
  });

  return (
    <View style={styles.screen}>
      <Image style={styles.image} source={require("../img/2.gif")} />
      <Text style={styles.text}>
        Gefeliciteerd, u heeft de {route.params.purch} aangekocht. Nu moet u
        enkel nog op vakantie vertrekken!
      </Text>

      <Pressable
        style={styles.boeton}
        onPress={() => navigation.navigate("EviNite koffers")}
      >
        <Text style={styles.boetonText}>Terug naar home</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#EEFBFF",
    height: "100%",
  },

  image: {
    height: "100%",
    width: "150%",
  },

  text: {
    fontSize: 28,
    marginTop: -600,
    textAlign: "center",
    fontFamily: "Satisf",
    width: "80%",
    marginLeft: 40,
    color: "white",
  },

  boeton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#F2CF08",
    width: "60%",
    marginLeft: 80,
    marginTop: 20,
  },

  boetonText: {
    fontSize: 14,
    color: "white",
    fontFamily: "Comforta",
  },
});
export default PayedScreen;
