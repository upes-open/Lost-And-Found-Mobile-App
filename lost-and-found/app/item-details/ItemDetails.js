import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useGlobalSearchParams, useRouter } from "expo-router";
import no_image from "./no-image.png";
import loading from "./loading.gif";

const ItemDetails = () => {
  const params = useGlobalSearchParams();
  const id = params.id;

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
        console.log("id",id);
        const foundItem = json.find((item) => item._id === id);
        setItem(foundItem);
        setFetched(true);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, [id]);

  return (
    <View style={styles.container}>
      {fetched ?     (
        <View style={styles.cardWrapper}>
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
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{item?.subcategory}</Text>
            <Text style={styles.description}>{item?.description}</Text>
            <View style={styles.info}>
              <Text>Place: {item?.place}</Text>
              <Text>Date: {item?.date}</Text>
            </View>
            <TouchableOpacity
              title="Claim Item"
              onPress={() => handleClaimItem(item?._id)}
            />
          </View>
        </View>
      ) : (
        <View style={{ width: 0 }}>
          <Image
            source={loading}
            style={{ marginTop: 50, height: 50, width: 50 }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cardWrapper: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
  imageContainer: {
    alignItems: "center",
  },
  itemImage: {
    width: 200,
    height: 200,
    borderRadius: 5,
  },
  detailsContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  info: {
    marginBottom: 10,
  },
});

export default ItemDetails;
