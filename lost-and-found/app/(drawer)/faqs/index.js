import React from 'react'
import { SafeAreaView } from "react-native";
import { Drawer } from "expo-router/drawer";
import { DrawerToggleButton } from '@react-navigation/drawer';
import Faqs from '../../../components/faqs/Faqs';

const index = () => {
    return (
        <SafeAreaView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor : "#fff" }}>
                <Drawer.Screen
                    options={{
                        headerShown: true,
                        title: "",
                        headerStyle: { backgroundColor: "#fff" },
                        headerShadowVisible: false,
                        headerLeft: () => <DrawerToggleButton />,
                    }}
                />
                <Faqs/>
        </SafeAreaView>

    )
}

export default index;
