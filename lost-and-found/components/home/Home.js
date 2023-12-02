import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./home.style";
import lost from "./images/lost.png";
import found from "./images/found.png";
import itemsgallery from "./images/itemsgallery.png";
import helpusfind from "./images/helpusfind.png";
import feedback from "./images/feedback.png";
import faq from "./images/faq.png";
import { useRouter, useGlobalSearchParams } from "expo-router";

const Home = () => {
  const routes = [
    { id: 1, name: "Report Lost Item", image: lost, routeLink: "/lostItems" },
    { id: 2, name: "Report Found Item", image: found, routeLink: "/foundItems"  },
    { id: 3, name: "Items Gallery", image: itemsgallery, routeLink: "/gallery"  },
    { id: 4, name: "Help Us Find", image: helpusfind, routeLink: "/help_us_find"  },
    { id: 5, name: "Feedback", image: feedback , routeLink: "/feedback" },
    { id: 6, name: "FAQ", image: faq , routeLink: "/faqs" },
  ];

  const router = useRouter();

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: -10,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 64,
            fontFamily: "Cookie_400Regular",
          }}
        >
          Lost
        </Text>
        <Text style={{ fontSize: 38 }}> & </Text>
        <Text
          style={{
            color: "white",
            fontSize: 64,
            fontFamily: "Cookie_400Regular",
          }}
        >
          Found
        </Text>
      </View>

      <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
        <Text style={styles.desc}>
        
          We help you find lost items and reunite them with their owners.
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: 30,
          flexWrap: "wrap",
        }}
      >
        {routes?.map((route) => (
          <View key={route.id} style={styles.mapItem}>
            <TouchableOpacity
              style={styles.mapContainer}
              onPress={() => router.push(route.routeLink)}
            >
              <View style={styles.logoContainer}>
                <Image
                  source={route.image}
                  resizeMode="contain"
                  style={styles.image}
                />
              </View>
              <Text style={styles.categoryText}>{route.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Home;
