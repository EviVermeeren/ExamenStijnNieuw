import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useFonts } from "expo-font";

const DetailScreen = ({ navigation, route }) => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(5);

  const increase = () => {
    if (counter2 > 0) {
      setCounter((currentCounter) => currentCounter + 1);
      setCounter2((currentCounter2) => currentCounter2 - 1);
    }
  };

  const decrease = () => {
    if (counter > 0) {
      setCounter((currentCounter) => currentCounter - 1);
      setCounter2((currentCounter2) => currentCounter2 + 1);
    }
    if (counter == 0) {
      counter + 0;
    }
    if (counter2 == 5) {
      counter2 + 0;
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
      <View style={styles.flexbox2}>
        <Text style={styles.products}>{route.params.itemTitle}</Text>

        <Pressable
          onPress={() =>
            navigation.navigate("💵 Winkelkarretje", {
              uri: route.params.itemUri,
              desc: route.params.itemDesc,
              title: route.params.itemTitle,
            })
          }
        >
          <View style={styles.shoppingcart}>
            <Image
              style={styles.icon}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/1413/1413908.png",
              }}
            />
            <Text style={styles.number}>{counter}</Text>
          </View>
        </Pressable>
      </View>

      <View style={styles.flex}>
        <Image style={styles.image} source={{ uri: route.params.itemUri }} />

        <View style={styles.flex}>
          <Text style={styles.description}>{route.params.itemDesc}</Text>

          <View>
            <Pressable
              style={styles.boeton}
              onPress={() => {
                increase();
              }}
            >
              <Text style={styles.boetonText}>In mandje</Text>
            </Pressable>

            <Pressable
              style={styles.boeton2}
              onPress={() => {
                decrease();
              }}
            >
              <Text style={styles.boetonText}>Uit mandje</Text>
            </Pressable>

            <Pressable
              style={styles.boeton3}
              onPress={() =>
                navigation.navigate("💵 Winkelkarretje", {
                  uri: route.params.itemUri,
                  desc: route.params.itemDesc,
                  title: route.params.itemTitle,
                })
              }
            >
              <Text style={styles.boetonText}>Koop nu</Text>
            </Pressable>
          </View>

          <Text style={styles.voorraad}>Op voorraad: {counter2}</Text>
        </View>
      </View>

      <Pressable style={styles.seeProduct} onPress={() => navigation.goBack()}>
        <Text style={styles.text}>Terug naar overzicht</Text>
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

  voorraad: {
    color: "#143B45",
    marginLeft: 80,
    fontFamily: "Comforta",
  },

  description: {
    width: "80%",
    marginTop: 75,
    fontSize: 14,
    marginLeft: 50,
    color: "#143B45",
    fontFamily: "Comforta",
  },

  flex: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 25,
  },

  text: {
    fontSize: 12,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
    fontFamily: "Comforta",
  },

  boetonText: {
    fontSize: 12,
    lineHeight: 21,
    fontFamily: "Comforta",
    letterSpacing: 0.25,
    color: "white",
  },

  seeProduct: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#297287",
    width: 220,
    marginTop: 20,
    marginLeft: "18%",
    marginBottom: 10,
  },

  boeton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#297287",
    width: 175,
    marginLeft: 50,
    marginBottom: 10,
    marginTop: 20,
  },

  boeton2: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#297287",
    width: 175,
    marginLeft: 50,
    marginBottom: 10,
  },

  boeton3: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#F2CF08",
    width: 175,
    marginLeft: 50,
    marginBottom: 10,
  },

  image: {
    width: 120,
    height: 220,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginTop: 100,
  },

  shoppingcart: {
    marginRight: 5,
    marginTop: 15,
  },

  icon: {
    height: 30,
    width: 30,
    marginTop: 8,
  },

  products: {
    fontSize: 25,
    marginTop: 15,
    color: "#143B45",
    fontFamily: "Petrona",
  },

  flexbox2: {
    flex: 1,
    flexDirection: "row",
    flexGrow: 0,
    flexShrink: 0,
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  number: {
    fontSize: 15,
    height: 55,
    marginLeft: 25,
    color: "#143B45",
    fontFamily: "Petrona",
  },
});
export default DetailScreen;
