import React from "react";
import { View, Text, Image } from "react-native";
import user1 from "../../assets/images/user.png";
import { getUserData } from "../../context/AppContext";
import { useAuth } from "../../context/AuthContext";

const DrawerMenu = () => {
  const { userData, setUserData } = getUserData();
  const { auth: user, logout } = useAuth();

  return (
    <View
      style={{
        paddingTop: 45,
        paddingBottom: 10,
        marginBottom: 10,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#dbe7eb",
      }}
    >
      <Image
        source={user1}
        style={{
          height: 70,
          width: 70,
          borderRadius: 65,
        }}
      />

      <Text
        style={{
          paddingTop: 10,
          fontSize: 16,
          marginVertical: 6,
          fontWeight: "bold",
          color: "#111",
        }}
      >
        {user?.name}
      </Text>

      <Text
        style={{
          fontSize: 14,
          marginVertical: 6,
          fontFamily: "DMRegular",
          color: "#111",
        }}
      >
        {user?.unique_name}
      </Text>
    </View>
  );
};

export default DrawerMenu;
