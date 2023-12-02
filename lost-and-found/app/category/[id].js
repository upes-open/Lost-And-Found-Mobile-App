import React from "react";
import styles from "./gallery.style.js";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useRouter, useGlobalSearchParams } from "expo-router";
import demo from "./demo.jpeg";
import { ChevronLeftIcon } from "react-native-heroicons/outline";

const Category = () => {
  const params = useGlobalSearchParams();
  const router = useRouter();

  const categories = [
    {
      name: "Cards",
      subcategories: [
        "College ID Card",
        "ATM Card",
        "Driver's License",
        "Aadhar Card",
        "Any Other Card",
      ],
    },
    {
      name: "Books",
      subcategories: ["Notebook", "Book", "Novel", "Any Other Book"],
    },
    {
      name: "Electronic Devices",
      subcategories: [
        "Mobile Phone",
        "Laptop",
        "Smart Watch",
        "Charger",
        "Any Other Device",
      ],
    },
    {
      name: "Others",
      subcategories: ["Bottle", "Wallet", "Bag", "Any other Item"],
    },
  ];

  const handlePress = (category) => {
    router.push(`/items/ItemList?category=${category}`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => router.push("/gallery")}
        style={{
          left: 10,
          top: 28,
          position: "absolute",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <ChevronLeftIcon size="20" strokeWidth={3} color="black" />
          <Text>Back</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.heading}>
        <Text style={{ fontFamily: "DMMedium", fontSize: 24 }}>
          Select a Category
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
          {categories[params.id - 1].subcategories?.map((category) => (
            <View key={category} style={styles.mapItem}>
              <TouchableOpacity
                style={styles.mapContainer}
                onPress={() => handlePress(category)}
              >
                <View style={styles.logoContainer}>
                  <Image source={demo} style={styles.image} />
                </View>
                <View style={{ paddingLeft: 30 }}>
                  <Text style={styles.categoryText}>{category}</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Category;
