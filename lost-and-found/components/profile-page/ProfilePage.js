import React, { useState, useEffect } from 'react';
import styles from './profile.style';
import axios from 'axios';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
} from 'react-native';

const ProfilePage = () => {
  const [lostItems, setLostItems] = useState(5);
  const [foundItems, setFoundItems] = useState(10);
  const [user, setUser] = useState({
    name: 'Test User',
    email: 'test123@gmail.com',
    profileUrl: '',
  });

  useEffect(() => {
    const getUser = async () => {
      const apiUrl = ''; // provide endpoint to fetch user data
      const response = await axios.get(apiUrl);

      setUser(response.data);
    };
    getUser();
  }, []);

  const handleLogout = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        {/* banner section start */}
        <View style={styles.bannerSection}>
          <View style={styles.profileImageContainer}>
            <Image
              style={styles.profileImage}
              source={user.profileUrl || require('./profile.jpg')}
            />
          </View>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
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
