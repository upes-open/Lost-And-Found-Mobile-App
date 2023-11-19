// These Utility functions are used to access react-native AsyncStorage (key : value)
// Pass only string to these

import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (err) {
    console.log("Error saving", err.message);
  }
};

export const getData = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);

    if (data !== null) return data;
    else return null;
  } catch (err) {
    console.log("Error getting data", err.message);
  }
};

export const deleteData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (err) {
    console.log("Error deleting", err.message);
  }
};
