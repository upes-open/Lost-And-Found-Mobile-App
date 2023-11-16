import React from 'react'
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from './gallery.style.js';
import demo from "./demo.jpeg";
import { useRouter } from "expo-router"

const Gallery = () => {

    const router = useRouter();

    const categories = [
        { id: 1, name: 'Cards', subcategories: ['College ID Card', 'ATM Card', "Driver's License", 'Aadhar Card', 'Any Other Card'] },
        { id: 2, name: 'Books', subcategories: ['Notebook', 'Book', 'Novel', 'Any Other Book'] },
        { id: 3, name: 'Electronic Devices', subcategories: ['Mobile Phone', 'Laptop', 'Smart Watch', 'Charger', 'Any Other Device'] },
        { id: 4, name: 'Others', subcategories: ['Bottle', 'Wallet', 'Bag', 'Any other Item'] },
    ];

    const handlePress = (category) => {
        console.log("clicked");
        router.push(`/category/${category.id}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Text style={{ fontFamily: "DMBold", fontSize: 28 }}> Items Gallery </Text>
            </View>

            <ScrollView>
                <View style={{ flexDirection: "row", justifyContent: "center", paddingTop: 30, flexWrap: 'wrap', }}>
                    {categories?.map((category) => (
                        <View
                            key={category.name}
                            style={styles.mapItem}
                        >
                            <TouchableOpacity
                                style={styles.mapContainer}
                                onPress={ () => handlePress(category)}
                            >
                                <View style={styles.logoContainer}>
                                    <Image
                                        source={demo}
                                        resizeMode="contain"
                                        style={styles.image}
                                    />
                                </View>
                                <Text style={styles.categoryText} >{category.name}</Text>

                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScrollView >
        </View>

    )
}

export default Gallery
