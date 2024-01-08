import React from "react";
import styles from "./gallery.style.js";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { useRouter, useGlobalSearchParams } from "expo-router";
import demo from "./demo.jpeg";
import { ChevronLeftIcon } from "react-native-heroicons/outline";

// import images
import collegeId from "./images/collegeID.jpg";
import atmCard from "./images/atmCard.jpg";
import driverLicense from "./images/driverLicense.jpg";
import aadharCard from "./images/aadharCard.jpg";
import anyOtherCard from "./images/anyOtherCard.jpg";

import notebook from "./images/notebook.jpg";
import book from "./images/book.jpg";
import novel from "./images/novel.jpg";
import anyOtherBook from "./images/anyOtherBook.jpg";

import mobilePhone from "./images/mobilePhone.jpg";
import laptop from "./images/laptop.jpg";
import smartWatch from "./images/smartWatch.jpg";
import charger from "./images/charger.jpg";
import anyOtherDevice from "./images/anyOtherDevice.jpg";

import bottle from "./images/bottle.jpg";
import wallet from "./images/wallet.jpg";
import bag from "./images/bag.jpg";
import anyOtherItem from "./images/anyOtherItem.jpg";

const Category = () => {
  const params = useGlobalSearchParams();
  const router = useRouter();

  const categories = [
    {
      name: "Cards",
      subcategories: [
        { name: "College ID Card", image: collegeId },
        { name: "ATM Card", image: atmCard },
        { name: "Driver's License", image: driverLicense },
        { name: "Aadhar Card", image: aadharCard },
        { name: "Any Other Card", image: anyOtherCard },
      ],
    },
    {
      name: "Books",
      subcategories: [
        { name: "Notebook", image: notebook },
        { name: "Book", image: book },
        { name: "Novel", image: novel },
        { name: "Any Other Book", image: anyOtherBook },
      ],
    },
    {
      name: "Electronic Devices",
      subcategories: [
        { name: "Mobile Phone", image: mobilePhone },
        { name: "Laptop", image: laptop },
        { name: "Smart Watch", image: smartWatch },
        { name: "Charger", image: charger },
        { name: "Any Other Device", image: anyOtherDevice },
      ],
    },
    {
      name: "Others",
      subcategories: [
        { name: "Bottle", image: bottle },
        { name: "Wallet", image: wallet },
        { name: "Bag", image: bag },
        { name: "Any other Item", image: anyOtherItem },
      ],
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
          {categories[params.id - 1].subcategories?.map((category, index) => (
            <View key={index} style={styles.mapItem}>
              <TouchableOpacity
                style={styles.mapContainer}
                onPress={() => handlePress(category.name)}
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

export default Category;
