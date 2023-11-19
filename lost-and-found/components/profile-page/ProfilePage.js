import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { useAuth } from "../../context/AuthContext";
import styles from "./profile.style";

const ProfilePage = () => {
  const [lostItems, setLostItems] = useState(5);
  const [foundItems, setFoundItems] = useState(10);

  const { auth: user, logout } = useAuth();
  const handleLogout = () => {
    logout();
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        {/* banner section start */}
        <View style={styles.bannerSection}>
          <View style={styles.profileImageContainer}>
            <Image
              style={styles.profileImage}
              source={require("./profile.jpg")}
            />
          </View>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.unique_name}</Text>
        </View>
        {/* banner section end */}

        {/* item counter section start */}
        <View style={styles.itemCountContainer}>
          <View style={styles.itemCountBox}>
            <Text style={styles.itemCount}>{lostItems}</Text>
            <Text style={styles.itemLabel}>Lost Items</Text>
          </View>
          <View style={styles.itemCountBox}>
            <Text style={styles.itemCount}>{foundItems}</Text>
            <Text style={styles.itemLabel}>Found Items</Text>
          </View>
        </View>
        {/* item counter section end */}
      </View>

      <Pressable onPress={handleLogout} style={styles.logoutBtn}>
        <Text style={styles.logoutText}>Logout</Text>
      </Pressable>
    </View>
  );
};

export default ProfilePage;
