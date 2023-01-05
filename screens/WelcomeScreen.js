import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
};

const WelcomeScreen = ({ navigation, route }) => {
  const [fontsLoaded] = useFonts({
    Petrona: require("../img/petron.ttf"),
  });

  const [fontsLoaded2] = useFonts({
    Comforta: require("../img/comfort.ttf"),
  });

  const [fontsLoaded3] = useFonts({
    Satisf: require("../img/satisf.ttf"),
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
    <View style={styles.screen}>
      <Image style={styles.image} source={require("../img/4.png")} />

      <Text style={styles.linearGradient}>Welkom in de EviNite app!</Text>

      <View>
        <FadeInView>
          <LinearGradient
            colors={["#BDF0FF", "#297287"]}
            style={styles.linearGradient2}
          >
            <Pressable onPress={() => navigation.navigate("EviNite koffers")}>
              <Text style={styles.buttonText}> ➡ Ga naar de koffers ➡</Text>
            </Pressable>
          </LinearGradient>
        </FadeInView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    borderWidth: 5,
    borderColor: "#BDF0FF",
    marginTop: -600,
    borderRadius: 25,
    width: "90%",
    marginLeft: "6%",
    fontSize: 24,
    textAlign: "center",
    margin: 10,
    paddingTop: 35,
    color: "#ffffff",
    backgroundColor: "#3496B1",
    padding: 25,
    fontFamily: "Petrona",
  },

  images: {
    width: 100,
    height: 100,
    marginTop: 280,
    marginLeft: 280,
  },

  linearGradient2: {
    borderRadius: 25,
    border: "solid",
    width: "70%",
    marginLeft: "15%",
    shadowColor: "#FFFFFF",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.55,
    shadowRadius: 3.84,

    elevation: 15,
  },

  buttonText: {
    fontSize: 18,
    textAlign: "center",
    margin: 25,
    color: "#ffffff",
    backgroundColor: "transparent",
    fontFamily: "Comforta",
  },

  screen: {
    flex: 1,
  },

  image: {
    opacity: 0.6,
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
});
export default WelcomeScreen;
