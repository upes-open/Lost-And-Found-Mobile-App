import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import Carousel from "react-native-snap-carousel";
import { ArrowLeftIcon, ChevronLeftIcon } from 'react-native-heroicons/outline';
import { useNavigation, useRoute } from '@react-navigation/native'

import no_image from "./no-image.png";

import { useGlobalSearchParams , useRouter,} from "expo-router";

const { width, height } = Dimensions.get("window");
const host = "https://lost-and-found.cyclic.app";

export default function ItemList() {
  const params = useGlobalSearchParams();
  const category = params.category;
  const navigation = useNavigation();
  const router = useRouter();
  const [items, setItems] = useState([]);

  const url = `${host}/getAllItems`;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const json = await response.json();
        setItems(json);
        console.log(json);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, [url]);

  const filteredItems = category
    ? items.filter((item) => item.subcategory === category)
    : items;

  const handleClick = (id) => {
    console.log(id);
    router.push(`/item-details/ItemDetails?id=${id}`);
  };

  return (
    <View
      style={{
        marginTop: 20,
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{marginLeft: 10}}
      >
        <ChevronLeftIcon size="28" strokeWidth={2.5} color="black"/>
      </TouchableOpacity>

      <View
        style={{
          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontFamily: "DMMedium", fontSize: 20 }}>{category}</Text>
      </View>

      <View style={{ marginTop: 80 }}>
        <Carousel
          data={filteredItems}
          renderItem={({ item }) => (
            <ItemCard
              handleClick={handleClick}
              id={item?._id}
              itemImage={item?.itemImage}
            />
          )}
          firstItem={0}
          inactiveSlideOpacity={0.6}
          sliderWidth={width}
          itemWidth={width * 0.72}
          slideStyle={{ display: "flex", alignItems: "center" }}
        />
      </View>
    </View>
  );
}

const ItemCard = ({ id, itemImage, handleClick }) => {
  return (
    <TouchableOpacity onPress={() => handleClick(id)}>
      <Image
        source={
          itemImage ? { uri: `${host}/foundItemImages/${itemImage}` } : no_image
        }
        style={{
          width: width * 0.7,
          height: height * 0.4,
          borderRadius: 20,
        }}
      />
    </TouchableOpacity>
  );
};
