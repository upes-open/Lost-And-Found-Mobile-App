import React from 'react'
import FoundItem from '../../../components/found-items/FoundItem';
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
                <FoundItem />
            </View>
        </ScrollView>

    )
}

export default index;
