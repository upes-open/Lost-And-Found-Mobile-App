import React, {useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './home.style';
import lost from "./images/lost.png"
import found from "./images/found.png"
import itemsgallery from "./images/itemsgallery.png"
import helpusfind from "./images/helpusfind.png"
import feedback from "./images/feedback.png"
import faq from "./images/faq.png"

const Home = () => {

    const routes = [
        { id: 1, name: 'Report Lost Item', image: lost },
        { id: 2, name: 'Report Found Item', image: found },
        { id: 3, name: 'Items Gallery', image: itemsgallery },
        { id: 4, name: 'Help Us Find', image: helpusfind },
        { id: 5, name: 'Feedback', image: feedback },
        { id: 6, name: 'FAQ', image: faq },
    ];

    const [selected, setselected] = useState(null);

    const handlePress = (item) => {
        setselected(item);
      };

    return (

        <View style={styles.container}>

            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
                <Text style={{ color: "white", fontSize: 64, fontFamily: "Cookie_400Regular" }}>Lost</Text>
                <Text style={{ fontSize: 38, }}> & </Text>
                <Text style={{ color: "white", fontSize: 64, fontFamily: "Cookie_400Regular" }}>Found</Text>
            </View>

            <View style={{paddingHorizontal: 20}}>
                <Text style={styles.desc}> We help you find lost items and reunite them with their owners. </Text>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "center", paddingTop: 30, flexWrap: 'wrap', }}>
                {routes?.map((route) => (
                    <View
                        key={route.id}
                        style={styles.mapItem}
                    >
                        <TouchableOpacity
                            style={styles.mapContainer}
                            onPress={ () => handlePress(route.id)}
                        >
                            <TouchableOpacity style={styles.logoContainer}>
                                <Image
                                    source={route.image}
                                    resizeMode="contain"
                                    style={styles.image}
                                />
                            </TouchableOpacity>
                            <Text style={styles.categoryText} >{route.name}</Text>

                        </TouchableOpacity >
                    </View>
                ))}
            </View>
        </View>
    )
}

export default Home
