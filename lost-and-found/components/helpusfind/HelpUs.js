import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import styles from './helpus.style.js';
import loading from "./loading.gif";
import no_image from "./no-image.png";
import { useNavigation } from '@react-navigation/native';
import head from "./head.png";

const HelpUs = (props) => {

    const navigation = useNavigation();

    const [fetched, setFetched] = useState(false);
    const [lostItems, setItems] = useState([]);
    const host = "https://lost-and-found.cyclic.app";
    const [spinner, setSpinner] = useState(true);

    // API call
    const url = `${host}/getLostItems`;

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
                setFetched(true);
            } catch (error) {
                console.log(error.message);
            } finally {
                setSpinner(false); // Hide the spinner after data is fetched
            }
        }
        fetchData();
    }, [url]);


    const HelpUsItems = ({ itemImage, subcategory, desc }) => {
        return (
            <View style={styles.cardContainer}>


                <View style={styles.logoContainer}>
                    <Image
                        source={itemImage ? { uri: `${host}/lostItemImages/${itemImage}` } : no_image}
                        resizeMode="contain"
                        style={styles.logoImage}
                    />
                </View>

                <View style={styles.category}>
                    <Text style={styles.categoryText} numberOfLines={1}>{subcategory}</Text>
                </View>


                <View >
                    <Text style={styles.descText} numberOfLines={1}>
                        {desc}
                    </Text>
                </View>

                <TouchableOpacity
                    style={styles.applyBtn}
                    onPress={() => {
                        navigation.navigate('feedback');
                    }}
                >
                    <Text style={{ color: "white", fontSize: 14, fontFamily: "DMRegular" }}>Report as Found</Text>
                </TouchableOpacity>

            </View >
        )
    }

    return (
        <View style={styles.container}>
                    <Image
                        source={head}
                        resizeMode="contain"
                        style={styles.backgroundImage}
                    />

                    <Text style={{margin:"auto"}}>
                        <Text style={styles.heading}>Help Us</Text> <Text style={{ fontFamily: "DMRegular", color: "grey", fontSize: 25 }}>Find</Text>
                    </Text>

                    {spinner ? (
                        <View style={styles.spinnerContainer}>
                            <Image source={loading} style={styles.spinner} />
                        </View>
                    ) : fetched ? (
                        <FlatList
                            data={lostItems}
                            horizontal
                            renderItem={({ item }) => (
                                <HelpUsItems
                                    itemImage={item?.itemImage}
                                    subcategory={item?.subcategory}
                                    desc={item?.description}
                                />
                            )}
                            keyExtractor={(item) => item?._id} // Provide a unique key
                        />
                    ) : (
                        <View>
                            <Text style={{ marginTop: 20, fontSize: 16 }}>No items to display ...</Text>
                        </View>
                    )}
        </View>
    );
};

export default HelpUs;
