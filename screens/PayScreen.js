import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

const PayScreen = ({ navigation, route }) => {

  const [fontsLoaded] = useFonts({
    'Petrona': require('../img/petron.ttf'),
  });

  const [fontsLoaded2] = useFonts({
    'Comforta': require('../img/comfort.ttf'),
  });

  return (
    <View style={styles.screen}>
        <Text style={styles.text}>Hoe wilt u de {route.params.purch} betalen?</Text>
        <Pressable style={styles.boeton} onPress={() => navigation.navigate("Betaald", {purch: route.params.purch})}>
              <Text style={styles.boetonText}>Bancontact</Text>
        </Pressable>
        <Pressable style={styles.boeton} onPress={() => navigation.navigate("Betaald", {purch: route.params.purch})}>
              <Text style={styles.boetonText}>Creditcard</Text>
        </Pressable>
        <Pressable style={styles.boeton} onPress={() => navigation.navigate("Betaald", {purch: route.params.purch})}>
              <Text style={styles.boetonText}>Payconic</Text>
        </Pressable>
        <Pressable style={styles.boeton} onPress={() => navigation.navigate("Betaald", {purch: route.params.purch})}>
              <Text style={styles.boetonText}>Apple Pay</Text>
        </Pressable>
        <Pressable style={styles.boeton2} onPress={() => navigation.goBack()}>
              <Text style={styles.boetonText}>Terug naar winkelmandje</Text>
        </Pressable>
    </View >
  );
}
 
const styles = StyleSheet.create({
  screen: {
    padding: 25,
    backgroundColor: '#EEFBFF',
    height: '100%',
  },

  text: {
    fontSize: 20,
    marginTop: 50,
    color: '#143B45',
    textAlign: 'center',
    fontFamily: 'Petrona',
  },

  boeton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#297287',
    width: '100%',
    marginTop: 20,
   },

   boeton2: {
    borderWidth: 2,
    borderColor: '#1D353B',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#297287',
    width: '50%',
    marginLeft: 90,
    marginTop: 320,
   },

  boetonText: {
    textAlign: 'center',
    fontSize: 14,
    color: 'white',
    fontFamily: 'Comforta',
  },

});
export default PayScreen;
