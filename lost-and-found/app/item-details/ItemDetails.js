import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useGlobalSearchParams, useRouter } from "expo-router";
import no_image from "./no-image.png";
import loading from "./loading.gif";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronLeftIcon,
  CalendarDaysIcon,
  BookmarkIcon,
} from "react-native-heroicons/outline";
import { LinearGradient } from "expo-linear-gradient";

const ItemDetails = () => {
  const params = useGlobalSearchParams();
  const id = params.id;
  const navigation = useNavigation();

  const [fetched, setFetched] = useState(false);
  const [item, setItem] = useState(null); // Holds the item data

  const host = "https://lost-and-found.cyclic.app";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${host}/getAllItems`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await response.json();
        const foundItem = json.find((item) => item._id === id);
        setItem(foundItem);
        setFetched(true);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, [id]);

  const handleClaimItem = (id) => {};

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          left: 10,
          top: 35,
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

      {fetched ? (
        <>
          <View style={styles.imageContainer}>
            <Image
              source={
                item?.itemImage
                  ? { uri: `${host}/foundItemImages/${item?.itemImage}` }
                  : no_image
              }
              style={styles.itemImage}
              resizeMode="cover"
            />
            <LinearGradient
              colors={[
                "transparent",
                "rgba(23, 23, 23, 0.8)",
                "rgba(23, 23, 23, 1)",
              ]}
              style={{
                width: 400,
                height: 120,
                position: "absolute",
                bottom: 0,
              }}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
            />
          </View>

          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ fontFamily: "DMMedium", fontSize: 24 }}>
              {item?.subcategory}
            </Text>
            <Text
              style={{
                fontFamily: "DMMedium",
                fontSize: 16,
                color: "#83829A",
                padding: 20,
              }}
            >
              {item?.description}
            </Text>
          </View>

          <View style={{ marginLeft: 20 }}>
            <View
              style={{
                paddingVertical: 15,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <BookmarkIcon size="32" strokeWidth={1} color="red" />
              <Text style={{ paddingLeft: 10, fontFamily: "DMRegular" }}>
                Place: {item?.place}
              </Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <CalendarDaysIcon size="32" strokeWidth={1} color="red" />
              <Text style={{ paddingLeft: 10, fontFamily: "DMRegular" }}>
                Date: {item?.date}
              </Text>
            </View>
          </View>

          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => handleClaimItem(item?._id)}
            >
              <Text style={styles.loginBtnText}>Claim Item</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View
          style={{ flexDirection: "row", justifyContent: "center" }}
        >
          <Image
            source={loading}
            style={{ marginTop: 50, height: 30, width: 30 }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 70,
  },
  itemImage: {
    width: 400,
    height: 300,
    borderRadius: 5,
  },
  loginBtn: {
    width: "40%",
    // height: "16%",
    backgroundColor: "#9c27b0",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    margin: 20,
  },

  loginBtnText: {
    fontSize: 16,
    color: "#F3F4F8",
    fontFamily: "DMRegular",
  },
});

export default ItemDetails;
