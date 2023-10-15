import React from 'react'
import LostItem from '../../../components/lost-items/LostItem';
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Drawer } from "expo-router/drawer";
import { DrawerToggleButton } from '@react-navigation/drawer';

const index = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1 }}>
                <Drawer.Screen
                    options={{
                        headerShown: true,
                        title: "",
                        headerStyle: { backgroundColor: "rgba(0, 0, 0, 0)" },
                        headerShadowVisible: false,
                        headerLeft: () => <DrawerToggleButton />,
                    }}
                />
                <LostItem />
            </View>
        </ScrollView>

    )
}

export default index;
