import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Image,
} from "react-native";
import { useFonts } from "expo-font";

const ShippingScreen = ({ navigation, route }) => {
  const [fontsLoaded] = useFonts({
    Petrona: require("../img/petron.ttf"),
  });

  const [fontsLoaded2] = useFonts({
    Comforta: require("../img/comfort.ttf"),
  });

  const [enteredAdress, setEnteredAdress] = useState("");
  const [adress, setAdress] = useState("Uw adres: ...");

  const adressInputHandler = (enteredText) => {
    console.log(enteredText);
    setEnteredAdress(enteredText);
  };

  const addAdressHandler = () => {
    setAdress(() => [enteredAdress]);
    console.log(adress);
  };

  const [enteredName, setEnteredName] = useState("");
  const [name, setName] = useState("Uw naam: ...");

  const nameInputHandler = (enteredText) => {
    console.log(enteredText);
    setEnteredName(enteredText);
  };

  const addNameHandler = () => {
    setName(() => [enteredName]);
    console.log(name);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Overzicht van uw bestelling</Text>

      <View style={styles.flex}>
        <Text style={styles.title}>{route.params.title}</Text>
        <View style={styles.flex2}>
          <Text style={styles.description}>{route.params.desc}</Text>
          <Image style={styles.image} source={{ uri: route.params.uri }} />
        </View>
      </View>

      <Text style={styles.textAdress}>Vul uw gegevens in</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Typ uw naam hier..."
          style={styles.input}
          clearButtonMode="always"
          onChangeText={nameInputHandler}
        />

        <Pressable
          style={styles.boeton3}
          title="Toevoegen"
          onPress={addNameHandler}
        >
          <Text style={styles.boetonText}>Naam toevoegen</Text>
        </Pressable>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Typ uw adres hier..."
          style={styles.input}
          clearButtonMode="always"
          onChangeText={adressInputHandler}
        />

        <Pressable
          style={styles.boeton3}
          title="Toevoegen"
          onPress={addAdressHandler}
        >
          <Text style={styles.boetonText}>Adres toevoegen</Text>
        </Pressable>
      </View>

      <Text style={styles.text3}>Verzendgegevens</Text>
      <View style={styles.flex5}>
        <Text style={styles.adress}>{name}</Text>
        <Text style={styles.adress}>{adress}</Text>
      </View>

      <Pressable
        style={styles.boeton4}
        onPress={() =>
          navigation.navigate("Betalen", {
            purch: route.params.title,
            title: route.params.title,
            uri: route.params.uri,
            desc: route.params.desc,
            name: name,
            adress: adress,
          })
        }
      >
        <Text style={styles.boetonText2}>Ga verder naar betalen</Text>
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

  text: {
    fontSize: 20,
    marginTop: 10,
    color: "#143B45",
    textAlign: "left",
    fontFamily: "Petrona",
  },

  text3: {
    fontSize: 20,
    marginTop: 20,
    color: "#143B45",
    textAlign: "left",
    fontFamily: "Petrona",
  },

  textAdress: {
    fontSize: 20,
    marginTop: -100,
    color: "#143B45",
    textAlign: "left",
    fontFamily: "Petrona",
  },

  boetonText2: {
    fontSize: 12,
    color: "white",
    fontFamily: "Comforta",
  },

  flex: {
    height: 150,
    borderWidth: 2,
    marginBottom: 130,
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

  flex5: {
    height: 85,
    borderWidth: 2,
    borderColor: "#297287",
    borderRadius: 15,
    paddingLeft: 15,
    marginTop: 15,
    backgroundColor: "white",
  },

  description: {
    width: "50%",
    fontSize: 10,
    marginLeft: 10,
    marginTop: 10,
    color: "#143B45",
    fontFamily: "Comforta",
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

  adress: {
    fontSize: 10,
    marginTop: 15,
    color: "#143B45",
    textAlign: "left",
    fontFamily: "Comforta",
  },

  input: {
    marginTop: 10,
    marginBottom: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: "#297287",
    borderRadius: 15,
    paddingLeft: 15,
    backgroundColor: "white",
    fontFamily: "Comforta",
  },

  boeton3: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: "#297287",
    width: "50%",
    marginBottom: 10,
  },

  boeton4: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#297287",
    width: "100%",
    marginTop: 40,
  },

  boetonText: {
    textAlign: "center",
    fontSize: 14,
    color: "white",
    fontFamily: "Comforta",
  },
});
export default ShippingScreen;
