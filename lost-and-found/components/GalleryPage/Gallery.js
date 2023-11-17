import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import styles from "./gallery.style.js";

import books from "./images/books.jpg";
import devices from "./images/devices.jpg";
import cards from "./images/cards.jpg";
import others from "./images/others.jpg";

import { useRouter } from "expo-router";

const Gallery = () => {
  const router = useRouter();

  const categories = [
    { id: 1, name: "Cards", image: cards },
    { id: 2, name: "Books", image: books },
    {
      id: 3,
      name: "Electronic Devices",
      image: devices,
    },
    { id: 4, name: "Others", image: others },
  ];

  const handlePress = (category) => {
    console.log("clicked");
    router.push(`/category/${category.id}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={{ fontFamily: "DMMedium", fontSize: 24 }}>
          Items Gallery
        </Text>
      </View>

      <ScrollView>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            paddingTop: 30,
            flexWrap: "wrap",
          }}
        >
          {categories?.map((category) => (
            <View key={category.name} style={styles.mapItem}>
              <TouchableOpacity
                style={styles.mapContainer}
                onPress={() => handlePress(category)}
              >
                <View style={styles.logoContainer}>
                  <Image source={category.image} style={styles.image} />
                </View>
                <View style={{ paddingLeft: 30 }}>
                  <Text style={styles.categoryText}>{category.name}</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Gallery;
