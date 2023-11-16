import React from "react";
import styles from "./gallery.style.js";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Stack, useRouter, useGlobalSearchParams } from "expo-router";
import demo from "./demo.jpeg";

const Category = () => {
  const params = useGlobalSearchParams();
  const router = useRouter();

  console.log("hello");
  console.log(params.id);

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
  }

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={{ fontFamily: "DMBold", fontSize: 28 }}>
          {" "}
          Items Gallery{" "}
        </Text>
      </View>

      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            // justifyContent: "center",
            paddingTop: 30,
            paddingLeft: 20,
            flexWrap: "wrap",
          }}
        >
          {categories[params.id - 1].subcategories?.map((category) => (
            <View key={category} style={styles.mapItem}>
              <TouchableOpacity
                style={styles.mapContainer}
                onPress={() => handlePress(category)}
              >
                <TouchableOpacity style={styles.logoContainer}>
                  <Image
                    source={demo}
                    resizeMode="contain"
                    style={styles.image}
                  />
                </TouchableOpacity>

                <View style={styles.overlay}>
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
