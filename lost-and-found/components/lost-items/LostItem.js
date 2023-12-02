import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Platform,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "./lost.style";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import dateImage from "./images/calender.png";
import phoneImage from "./images/phone.png";
import descriptionImage from "./images/description.png";
import nameImage from "./images/name.png";
import idImage from "./images/id.png";
import placeImage from "./images/place.png";
import itemimage from "./images/item.png";

const LostItem = () => {
  const host = "http://172.192.10.202:3333"; // add your local device IP address here..
  
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [sapId, setSapId] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemImage, setItemImage] = useState(null);
  const [place, setPlace] = useState("");
  const [dateValue, setDateValue] = useState(new Date());
  const [isFormValid, setIsFormValid] = useState(false);

  const [open, setOpen] = useState(false);

  const checkFormValidity = () => {
    const isDescriptionValid = description.length > 0;
    const isDateValid = date.length > 0;
    const isPhoneValid = phone.length > 0;
    const isNameValid = name.length > 0;
    const isSapIdValid = sapId.length > 0;
    const isCategoryValid = category.length > 0;
    const isSubcategoryValid = subcategory.length > 0;
    const isPlaceValid = place.length > 0;

    const formIsValid =
      isDescriptionValid &&
      isDateValid &&
      isPhoneValid &&
      isNameValid &&
      isSapIdValid &&
      isCategoryValid &&
      isSubcategoryValid &&
      isPlaceValid;

    setIsFormValid(formIsValid);
  };

  useEffect(() => {
    checkFormValidity();
  }, [
    date,
    phone,
    description,
    category,
    subcategory,
    itemName,
    place,
    phone,
    sapId,
  ]);

  // for uploading the file to the cloudinary
  const uploadImage = async (itemImage) => {
    const uriParts = itemImage.split(".");
    const fileType = uriParts[uriParts.length - 1];

    const data = new FormData();
    data.append("file", {
      uri: itemImage,
      name: `photo.${fileType}`,
      type: `image/${fileType}`,
    });
    data.append("upload_preset", "LostAndFound");
    data.append("cloud_name", "dtd4kfsyg");

    var secure_url;

    await fetch("https://api.cloudinary.com/v1_1/dtd4kfsyg/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        secure_url = data.secure_url;
      })
      .catch((err) => {
        console.log(err);
      });

    return secure_url;
  };

  const handleSubmit = async () => {
    let secure_url;
    if (itemImage) {
      secure_url = await uploadImage(itemImage);
    }

    const data = {
        description,
        data,
        phone,
        name,
        sapId,
        category,
        subcategory,
        itemName,
        place,
        itemImage: secure_url,
      };

    try {
      const response = await fetch(`${host}/api/submitLostItem`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        setDescription("");
        setDate("");
        setPhone("");
        setName("");
        setSapId("");
        setCategory("");
        setSubcategory("");
        setItemName("");
        setItemImage(null);
        setPlace("");
      }
    } catch (error) {
      console.log("Error submitting form:", error);
    }
  };

  const renderSubcategoryOptions = () => {
    switch (category) {
      case "Cards":
        return (
          <Picker
            selectedValue={subcategory}
            onValueChange={handleSubcategoryChange}
          >
            <Picker.Item label="Select subcategory" value="" />
            <Picker.Item label="College ID Card" value="College ID Card" />
            <Picker.Item label="ATM Card" value="ATM Card" />
            <Picker.Item label="Driver's License" value="Driver's License" />
            <Picker.Item label="Aadhar Card" value="Aadhar Card" />
            <Picker.Item label="Any other card" value="other" />
          </Picker>
        );
      case "Electronic Devices":
        return (
          <Picker
            selectedValue={subcategory}
            onValueChange={handleSubcategoryChange}
          >
            <Picker.Item label="Select subcategory" value="" />
            <Picker.Item label="Mobile Phones" value="Mobile Phone" />
            <Picker.Item label="Laptop" value="Laptop" />
            <Picker.Item label="Smart Watch" value="Smart Watch" />
            <Picker.Item label="Charger" value="Charger" />
            <Picker.Item label="Any other electronic device" value="other" />
          </Picker>
        );
      case "Books":
        return (
          <Picker
            selectedValue={subcategory}
            onValueChange={handleSubcategoryChange}
          >
            <Picker.Item label="Select subcategory" value="" />
            <Picker.Item label="Notebooks/Registers" value="Notebook" />
            <Picker.Item label="Book" value="Book" />
            <Picker.Item label="Novel" value="Novel" />
            <Picker.Item label="Any other book" value="other" />
          </Picker>
        );
      case "Others":
        return (
          <Picker
            selectedValue={subcategory}
            onValueChange={handleSubcategoryChange}
          >
            <Picker.Item label="Select subcategory" value="" />
            <Picker.Item label="Bottles" value="Bottle" />
            <Picker.Item label="Wallets" value="Wallet" />
            <Picker.Item label="Bags" value="Bag" />
            <Picker.Item label="Any other item" value="other" />
          </Picker>
        );
      default:
        return null;
    }
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
    setSubcategory("");
    setItemName("");
  };

  const toggleDatepicker = () => {
    setOpen(!open);
  };

  const handleSubcategoryChange = (value) => {
    setSubcategory(value);
    if (value === "other") {
      setItemName("");
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setItemImage(result.assets[0].uri);
    }
  };

  const onChange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDateValue(currentDate);
      if (Platform.OS === "android") {
        toggleDatepicker();
        setDate(currentDate.toDateString());
      }
    } else {
      toggleDatepicker();
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 10,
        }}
      >
        <Text style={styles.heading}>Lost Item Details</Text>
      </View>

      <View>
        <Text style={styles.textinput}> Description </Text>
        <View style={styles.inputContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={descriptionImage}
              resizeMode="contain"
              style={{ width: "55%", height: "55%" }}
            />
          </View>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={(text) => {
              setDescription(text);
              checkFormValidity();
            }}
            placeholder="Enter description of the item"
          />
        </View>
      </View>

      <View>
        <Text style={styles.textinput}> Date </Text>

        <View style={styles.inputContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={dateImage}
              resizeMode="contain"
              style={{ width: "55%", height: "55%" }}
            />
          </View>
          <Pressable onPress={toggleDatepicker}>
            <TextInput
              style={styles.input}
              placeholder="Select the Date"
              value={date}
              onChangeText={(text) => setDate(text)}
              editable={false}
              color="black"
            />
          </Pressable>

          {open && (
            <DateTimePicker
              mode="date"
              display="spinner"
              value={dateValue}
              onChange={onChange}
            />
          )}
        </View>
      </View>

      <View>
        <Text style={styles.textinput}> Mobile No. </Text>
        <View style={styles.inputContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={phoneImage}
              resizeMode="contain"
              style={{ width: "55%", height: "55%" }}
            />
          </View>

          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={(text) => {
              setPhone(text);
              checkFormValidity();
            }}
            placeholder="Enter mobile number"
          />
        </View>
      </View>

      <View>
        <Text style={styles.textinput}> Name </Text>
        <View style={styles.inputContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={nameImage}
              resizeMode="contain"
              style={{ width: "55%", height: "55%" }}
            />
          </View>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder="Enter your name"
          />
        </View>
      </View>

      <View>
        <Text style={styles.textinput}> SAP ID </Text>
        <View style={styles.inputContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={idImage}
              resizeMode="contain"
              style={{ width: "55%", height: "55%" }}
            />
          </View>
          <TextInput
            style={styles.input}
            value={sapId}
            onChangeText={(text) => {
              setSapId(text);
              checkFormValidity();
            }}
            placeholder="Enter your SAP ID"
          />
        </View>
      </View>

      <View>
        <Text style={styles.textinput}> Select Category </Text>
        <View style={styles.inputContainer}>
          <Picker
            selectedValue={category}
            onValueChange={(itemValue, itemIndex) =>
              handleCategoryChange(itemValue)
            }
          >
            <Picker.Item label="Select category" value="" />
            <Picker.Item label="Cards" value="Cards" />
            <Picker.Item
              label="Electronic Devices"
              value="Electronic Devices"
            />
            <Picker.Item label="Books" value="Books" />
            <Picker.Item label="Others" value="Others" />
          </Picker>
        </View>
      </View>

      {category.length > 2 && (
        <View>
          <Text style={styles.textinput}> Subcategory </Text>
          <View style={styles.inputContainer}>
            {renderSubcategoryOptions()}
          </View>
        </View>
      )}

      {subcategory === "other" && (
        <View>
          <Text style={styles.textinput}> Name of Item</Text>
          <View style={styles.inputContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={itemimage}
                resizeMode="contain"
                style={{ width: "55%", height: "55%" }}
              />
            </View>
            <TextInput
              style={styles.input}
              value={itemName}
              onChangeText={(text) => {
                setItemName(text);
                checkFormValidity();
              }}
              placeholder="Enter name of the item"
            />
          </View>
        </View>
      )}

      <View>
        {itemImage ? (
          <Image
            source={{ uri: itemImage }}
            style={{
              width: 150,
              height: 150,
              borderRadius: 5,
              padding: 20,
              margin: 20,
            }}
          />
        ) : (
          <Text style={styles.textinput}> Upload Image </Text>
        )}
        <TouchableOpacity style={styles.selectBtn} onPress={pickImage}>
          <Text style={{ color: "white", fontFamily: "DMRegular" }}>
            Select Image
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.textinput}> Place you Lost the Item </Text>
        <View style={styles.inputContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={placeImage}
              resizeMode="contain"
              style={{ width: "55%", height: "55%" }}
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Enter the place you lost the item"
            value={place}
            onChangeText={(text) => {
              setPlace(text);
              checkFormValidity();
            }}
          />
        </View>
      </View>

      {!isFormValid && (
        <Text
          style={{
            fontSize: 14,
            color: "red",
            fontFamily: "DMRegular",
            marginTop: 10,
          }}
        >
          {" "}
          * Please fill in all required fields.{" "}
        </Text>
      )}

      <View style={{ flex: 1, justifyContent: "center", flexDirection: "row" }}>
        <TouchableOpacity
          style={styles.loginBtn}
          disabled={!isFormValid}
          onPress={handleSubmit}
        >
          <Text style={styles.loginBtnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LostItem;
