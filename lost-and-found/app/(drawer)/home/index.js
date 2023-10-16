import React from 'react';
import Home from '../../../components/home/Home'
import { View, Text, ScrollView, SafeAreaView, ImageBackground } from "react-native";
import { Drawer } from "expo-router/drawer";
import { DrawerToggleButton } from '@react-navigation/drawer';

const index = () => {
    return (
        <ImageBackground
            source={require('./bg.png')} // Specify the path to your background image
            style={{ flex: 1}}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1 }}>
                    <Drawer.Screen
                        options={{
                            headerShown: true,
                            title: "",
                            headerStyle: { backgroundColor: "#872798" },
                            headerShadowVisible: false,
                            headerLeft: () => <DrawerToggleButton />

                        }}
                    />
                    <Home />
                </View>
            </ScrollView>
        </ImageBackground>
    )
}

export default index;