import React from 'react'
import Gallery from '../../../components/GalleryPage/Gallery';
import { View } from "react-native";
import { Drawer } from "expo-router/drawer";
import { DrawerToggleButton } from '@react-navigation/drawer';

const index = () => {
    return (
        <View style={{ flex: 1}}>
            <Drawer.Screen
                options={{
                    headerShown: true,
                    title: "",
                    headerStyle: { backgroundColor: "rgba(0, 0, 0, 0)" },
                    headerShadowVisible: false,
                    headerLeft: () => <DrawerToggleButton />,
                }}
            />
            <Gallery />
        </View>

    )
}

export default index;
