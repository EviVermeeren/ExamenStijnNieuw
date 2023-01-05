import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";

const SearchFilter = ({ data, input }) => {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Petrona: require("../img/petron.ttf"),
  });

  const [fontsLoaded2] = useFonts({
    Comforta: require("../img/comfort.ttf"),
  });

  return (
    <View style={styles.extra}>
      <FlatList
        styles={styles.flat}
        data={data}
        renderItem={({ item }) => {
          if (input === "") {
            return (
              <View style={styles.box}>
                <TouchableOpacity activeOpacity={0.5}>
                  <View style={styles.listItem}>
                    <Image
                      style={styles.image}
                      source={{ uri: item.yoast_head_json.og_image[0].url }}
                    />

                    <Text style={styles.title}>{item.title.rendered}</Text>
                    <Text style={styles.eigenschappen}>
                      {item.yoast_head_json.og_description}
                    </Text>

                    <Pressable
                      style={styles.seeProduct}
                      onPress={() =>
                        navigation.navigate("Meer informatie", {
                          itemTitle: item.title.rendered,
                          itemDesc: item.yoast_head_json.og_description,
                          itemUri: item.yoast_head_json.og_image[0].url,
                        })
                      }
                    >
                      <Text style={styles.text}>
                        Bekijk product: {item.title.rendered}
                      </Text>
                    </Pressable>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }

          if (item.title.rendered.toLowerCase().includes(input.toLowerCase())) {
            return (
              <View style={styles.box}>
                <TouchableOpacity activeOpacity={0.5}>
                  <View style={styles.listItem}>
                    <Image
                      style={styles.image}
                      source={{ uri: item.yoast_head_json.og_image[0].url }}
                    />

                    <Text style={styles.title}>{item.title.rendered}</Text>
                    <Text style={styles.eigenschappen}>
                      {item.yoast_head_json.og_description}
                    </Text>

                    <Pressable
                      style={styles.seeProduct}
                      onPress={() =>
                        navigation.navigate("Meer informatie", {
                          itemTitle: item.title.rendered,
                          itemDesc: item.yoast_head_json.og_description,
                        })
                      }
                    >
                      <Text style={styles.text}>
                        Bekijk product: {item.title.rendered}
                      </Text>
                    </Pressable>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }

          if (
            item.yoast_head_json.og_description
              .toLowerCase()
              .includes(input.toLowerCase())
          ) {
            return (
              <View style={styles.box}>
                <TouchableOpacity activeOpacity={0.5}>
                  <View style={styles.listItem}>
                    <Image
                      style={styles.image}
                      source={{ uri: item.yoast_head_json.og_image[0].url }}
                    />

                    <Text style={styles.title}>{item.title.rendered}</Text>
                    <Text style={styles.eigenschappen}>
                      {item.yoast_head_json.og_description}
                    </Text>

                    <Pressable
                      style={styles.seeProduct}
                      onPress={() =>
                        navigation.navigate("Meer informatie", {
                          itemTitle: item.title.rendered,
                          itemDesc: item.yoast_head_json.og_description,
                        })
                      }
                    >
                      <Text style={styles.text}>
                        Bekijk product: {item.title.rendered}
                      </Text>
                    </Pressable>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#297287",
    borderRadius: 15,
  },

  extra: {
    flex: 1,
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

  text: {
    fontFamily: "Comforta",
    fontSize: 10,
    lineHeight: 21,
    color: "white",
  },

  image: {
    width: "40%",
    height: 200,
    marginLeft: "28%",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },

  box: {
    flexBasis: "45%",
    height: "100%",
    backgroundColor: "white",
    marginBottom: 15,
    borderRadius: 15,

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
    color: "#143B45",
    fontSize: 15,
    paddingLeft: 5,
    fontFamily: "Comforta",
  },

  title: {
    fontSize: 20,
    paddingLeft: 5,
    paddingTop: 25,
    color: "#143B45",
    fontFamily: "Petrona",
  },
});

export default SearchFilter;
