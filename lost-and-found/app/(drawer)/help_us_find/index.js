import React from 'react'
import HelpUs from '../../../components/helpusfind/HelpUs';
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
            <HelpUs />
        </View>

    )
}

export default index;
