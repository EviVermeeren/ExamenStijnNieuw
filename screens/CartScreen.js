import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useFonts } from "expo-font";

const CartScreen = ({ navigation, route }) => {
  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(4);

  const increase = () => {
    if (counter2 > 0) {
      setCounter((currentCounter) => currentCounter + 1);
      setCounter2((currentCounter2) => currentCounter2 - 1);
    }
    if (counter2 == 0) {
      counter + 0;
      counter2 - 0;
    }
  };

  const decrease = () => {
    if (counter > 1) {
      setCounter((currentCounter) => currentCounter - 1);
      setCounter2((currentCounter2) => currentCounter2 + 1);
    }
    if (counter == 0) {
      counter + 0;
    }
  };

  const [fontsLoaded] = useFonts({
    Petrona: require("../img/petron.ttf"),
  });

  const [fontsLoaded2] = useFonts({
    Comforta: require("../img/comfort.ttf"),
  });

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{route.params.title}</Text>
      <View style={styles.flex}>
        <Image style={styles.image} source={{ uri: route.params.uri }} />
        <Text style={styles.description}>{route.params.desc}</Text>

        <View>
          <Text style={styles.aantal}>Aantal: {counter}</Text>

          <Pressable
            style={styles.boeton2}
            onPress={() => {
              increase();
            }}
          >
            <Text style={styles.boetonText}>+</Text>
          </Pressable>

          <Pressable
            style={styles.boeton2}
            onPress={() => {
              decrease();
            }}
          >
            <Text style={styles.boetonText}>-</Text>
          </Pressable>
        </View>

        <View>
          <Text style={styles.voorraad}>Op voorraad: {counter2}</Text>

          <Pressable
            style={styles.boeton}
            onPress={() => navigation.navigate("🛒 Winkelkarretje")}
          >
            <Text style={styles.boetonText2}>
              Verwijder {route.params.title} uit mandje
            </Text>
          </Pressable>

          <Pressable
            style={styles.boeton3}
            onPress={() =>
              navigation.navigate("ShippingScreen", {
                title: route.params.title,
                uri: route.params.uri,
                desc: route.params.desc,
              })
            }
          >
            <Text style={styles.boetonText2}>
              Ik wil {route.params.title} kopen!
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 25,
    backgroundColor: "#EEFBFF",
    height: "100%",
  },

  voorraad: {
    color: "#143B45",
    marginLeft: 135,
    marginTop: 35,
    fontFamily: "Comforta",
  },

  flex: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 25,
  },

  description: {
    width: "30%",
    fontSize: 13,
    marginLeft: 10,
    marginTop: 10,
    color: "#143B45",
    fontFamily: "Comforta",
  },

  title: {
    marginLeft: 10,
    fontSize: 25,
    marginTop: 50,
    fontFamily: "Petrona",
    color: "#143B45",
  },

  aantal: {
    fontSize: 12,
    marginTop: 10,
    color: "#143B45",
    fontFamily: "Comforta",
  },

  image: {
    width: 80,
    height: 140,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginLeft: 10,
  },

  boeton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#297287",
    width: 300,
    marginLeft: 40,
    marginTop: 20,
  },

  boeton2: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "white",
    width: 50,
    marginTop: 10,
    marginLeft: 3,
  },

  boeton3: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#297287",
    width: 300,
    marginLeft: 40,
    marginTop: 10,
  },

  boetonText: {
    fontSize: 18,
    paddingBottom: 4,
    color: "#143B45",
    fontFamily: "Comforta",
  },

  boetonText2: {
    fontSize: 12,
    color: "white",
    fontFamily: "Comforta",
  },
});
export default CartScreen;
