import React from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { useFonts } from "expo-font";

const PayScreen = ({ navigation, route }) => {
  const [fontsLoaded] = useFonts({
    Petrona: require("../img/petron.ttf"),
  });

  const [fontsLoaded2] = useFonts({
    Comforta: require("../img/comfort.ttf"),
  });

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Overzicht van uw bestelling</Text>

      <View style={styles.flex}>
        <Text style={styles.title}>{route.params.title}</Text>
        <View style={styles.flex2}>
          <Text style={styles.description}>{route.params.desc}</Text>
          <Image style={styles.image} source={{ uri: route.params.uri }} />
        </View>
        <Text style={styles.name}>{route.params.name}</Text>
        <Text style={styles.adress}>{route.params.adress}</Text>
      </View>

      <Text style={styles.text}>
        Hoe wilt u de {route.params.purch} betalen?
      </Text>
      <Pressable
        style={styles.boeton}
        onPress={() =>
          navigation.navigate("Betaald", { purch: route.params.purch })
        }
      >
        <Text style={styles.boetonText}>Bancontact</Text>
      </Pressable>
      <Pressable
        style={styles.boeton}
        onPress={() =>
          navigation.navigate("Betaald", { purch: route.params.purch })
        }
      >
        <Text style={styles.boetonText}>Creditcard</Text>
      </Pressable>
      <Pressable
        style={styles.boeton}
        onPress={() =>
          navigation.navigate("Betaald", { purch: route.params.purch })
        }
      >
        <Text style={styles.boetonText}>Payconic</Text>
      </Pressable>
      <Pressable
        style={styles.boeton}
        onPress={() =>
          navigation.navigate("Betaald", { purch: route.params.purch })
        }
      >
        <Text style={styles.boetonText}>Apple Pay</Text>
      </Pressable>
      <Pressable style={styles.boeton2} onPress={() => navigation.goBack()}>
        <Text style={styles.boetonText}>Terug naar winkelmandje</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 25,
    backgroundColor: "#EEFBFF",
    height: "100%",
  },

  flex: {
    height: 170,
    borderWidth: 2,
    borderColor: "#297287",
    borderRadius: 15,
    paddingLeft: 15,
    marginTop: 15,
    backgroundColor: "white",
  },

  flex2: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  text: {
    fontSize: 20,
    marginTop: 50,
    color: "#143B45",
    textAlign: "left",
    fontFamily: "Petrona",
  },

  title: {
    marginLeft: 10,
    fontSize: 16,
    marginTop: 20,
    fontFamily: "Petrona",
    color: "#143B45",
  },

  image: {
    width: 40,
    height: 70,
    marginRight: 50,
    marginTop: -10,
  },

  boeton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#297287",
    width: "100%",
    marginTop: 20,
  },

  boeton2: {
    borderWidth: 2,
    borderColor: "#1D353B",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#297287",
    width: "50%",
    marginLeft: 90,
    marginTop: 320,
  },

  description: {
    width: "50%",
    fontSize: 10,
    marginLeft: 10,
    marginTop: 10,
    color: "#143B45",
    fontFamily: "Comforta",
  },

  name: {
    fontSize: 10,
    marginLeft: 10,
    color: "#143B45",
    fontFamily: "Comforta",
  },

  adress: {
    fontSize: 10,
    marginLeft: 10,
    paddingBottom: 10,
    color: "#143B45",
    fontFamily: "Comforta",
  },

  boetonText: {
    textAlign: "center",
    fontSize: 14,
    color: "white",
    fontFamily: "Comforta",
  },
});
export default PayScreen;
