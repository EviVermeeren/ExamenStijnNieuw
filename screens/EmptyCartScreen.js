import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Pressable, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

const EmptyCartScreen = ({ navigation, route }) => {

  const [suitcases, setSuitcases] = useState([]);
 
  const getSuitcases = async () => {
    try {
      const response = await fetch("https://evivermeeren.com/wp-json/wp/v2/products/", {
 
        }
      )
      const json = await response.json();
      setSuitcases(json);

    } catch (error) {
      console.error(error);
    }
 
  }
 
  useEffect(() => {
    getSuitcases();
  }, []);

  const [counter, setCounter] = useState(1);

    const increase = () => {
        setCounter((currentCounter) => currentCounter + 1);
      }
    
    const decrease = () => {
        if(counter > 1){
            setCounter((currentCounter) => currentCounter - 1);
        }
        if(counter == 0){
            counter + 0;
        }
    }

    const [fontsLoaded] = useFonts({
      'Petrona': require('../img/petron.ttf'),
    });
  
    const [fontsLoaded2] = useFonts({
      'Comforta': require('../img/comfort.ttf'),
    });

  return (
    <View style={styles.screen}>
        <Text style={styles.titles}>Uw mandje is leeg!</Text>
        <Pressable style={styles.boeton} onPress={() => navigation.navigate("EviNite koffers")}>
              <Text style={styles.boetonText}>Shoppen maar!</Text>
        </Pressable>

        <Text style={styles.titles2}>Onze aanraders</Text>

        <FlatList data={suitcases} styles={styles.flat} renderItem={({item}) => {
                return (
                    <View style={styles.box}>
                        <TouchableOpacity activeOpacity={0.5}>
                            <View style={styles.listItem}>

                                <Image style={styles.image} source={{uri: item.yoast_head_json.og_image[0].url}} />

                                <View style={styles.flexi}>
                                <Text style={styles.title}>{item.title.rendered}</Text>
                                <Text style={styles.eigenschappen}>{item.yoast_head_json.og_description}</Text>
                                </View>

                            </View>

                            <Pressable style={styles.seeProduct} onPress={() => navigation.navigate("Meer informatie", {itemTitle: item.title.rendered, itemDesc: item.yoast_head_json.og_description, itemUri: item.yoast_head_json.og_image[0].url})}>
                                    <Text style={styles.text}>Bekijk: {item.title.rendered}</Text>
                                </Pressable>
                        </TouchableOpacity >
                    </View>
                )
        }}/>

    </View >
  );
}
 
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 25,
    backgroundColor: '#EEFBFF',
  },

  titles: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 45,
    marginBottom: 15,
    color: '#143B45',
    backgroundColor: 'transparent',
    fontFamily: 'Petrona',
    
  },

  titles2: {
    fontSize: 18,
    marginTop: 45,
    marginBottom: 15,
    color: '#143B45',
    backgroundColor: 'transparent',
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
    width: 220,
    marginBottom: 20,
    marginLeft: 65,
   },

  boetonText: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Comforta',
  },

  listItem: {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
    marginTop: 20,
  }, 

  extra: {
      flex: 1,
  },

  seeProduct: {
   alignItems: 'center',
   justifyContent: 'center',
   paddingVertical: 6,
   paddingHorizontal: 6,
   borderRadius: 4,
   elevation: 3,
   backgroundColor: '#297287',
   width: 120,
   marginTop: 20,
   marginLeft: '60%',
   marginBottom: 25,
   
  },

  text: {
    fontSize: 8,
    lineHeight: 21,
    fontFamily: 'Comforta',
    letterSpacing: 0.25,
    color: 'white',
  },

  image: {
    width: '20%',
    height: 100,
    marginLeft: '5%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },

  box: {
    flex: 1,
    flexBasis: '45%',
    height: '100%',
    backgroundColor: 'white',
    marginBottom: 15,
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.55,
    shadowRadius: 3.84,

    elevation: 5,
  },

  eigenschappen: {
    color: '#143B45',
    fontSize: 13,    
    marginLeft: 25,
    fontFamily: 'Comforta',
  },

  flexi: {
    width: '70%',
  },

  title: {
    color: '#143B45',
    fontSize: 20,
    marginLeft: 25,
    fontFamily: 'Petrona',
  },

  flat: {
    flex: 1,
  },

});
export default EmptyCartScreen;
