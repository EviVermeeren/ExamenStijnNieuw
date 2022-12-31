import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import SearchFilter from '../components/SearchFilter';
import { useFonts } from 'expo-font';

 
const AllSuitcasesScreen = ({ navigation }) => {

  const [suitcases, setSuitcases] = useState([]);
 
  const getSuitcases = async () => {
    try {
      const response = await fetch("https://evivermeeren.com/wp-json/wp/v2/products/", {
 
        }
      )
      const json = await response.json();
      setSuitcases(json);
      console.log(suitcases);

    } catch (error) {
      console.error(error);
    }
 
  }
 
  useEffect(() => {
    getSuitcases();
  }, []);
 
  const [input, setInput] = useState("");
  console.log(input);

  return (
    <View style={styles.screen}>

          <View style={styles.flexbox2}>
            <Text style={styles.products}>Onze koffers</Text>

            <Pressable onPress={() => navigation.navigate("🛒 Winkelkarretje")}>
            <View style={styles.shoppingcart}>
              <Image
                  style={styles.icon}
                  source={{uri: 'https://cdn-icons-png.flaticon.com/512/1413/1413908.png'}}
                />
              <Text style={styles.number}>0</Text>
            </View>
            </Pressable>
          </View>

          <TextInput
            value={input}
            placeholder="Zoek op naam, maat, kleur, materiaal of prijs..."
            style={styles.input}
            onChangeText={(text) => setInput(text)}
          />

          <SearchFilter data={suitcases} input={input} setInput={setInput}/>


        
    </View>
  );
}
 
const styles = StyleSheet.create({
  screen: {
    padding: 25,
    paddingTop: 75,
    flex: 1,
    backgroundColor: '#EEFBFF',
  },

  input: {
    marginTop: 100,
    marginBottom: 25,
    padding: 10,
    borderWidth: 1,
    borderColor: '#297287',
    borderRadius: 15,
    paddingLeft: 15,
    backgroundColor: 'white',
    fontFamily: 'Comforta',
  },

  list: {
    marginTop: 50,
  },

  shoppingcart: {
    marginRight: 5,
    marginTop:15,
  },

  icon: {
    height: 30,
    width: 30,
    marginTop: 8,
  },

  products: {
    fontSize: 25,
    marginTop: 15,
    color: '#143B45',
    fontFamily: 'Petrona',
  },

  flexbox2: {
    flex: 1,
    flexDirection: 'row',
    flexGrow: 0, 
    flexShrink: 0,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }, 

  number: {
    fontSize: 15,
    height: 55,
    marginLeft: 25,
    color: '#143B45',
    fontFamily: 'Petrona',
  },

});
export default AllSuitcasesScreen;
