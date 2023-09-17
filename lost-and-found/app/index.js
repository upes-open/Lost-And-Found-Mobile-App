import React from 'react'
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import Login from "../components/login/login.js";
import { Stack, useRouter } from "expo-router";

const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FAFAFC" }}>
            <Stack.Screen
                options={{
                    headerShadowVisible: false,
                    headerTitle: "",
                    headerStyle: { backgroundColor: "#FAFAFC" },
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{ flex: 1}}
                >
                    <Login />
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Home
