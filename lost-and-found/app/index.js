import React from 'react'
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import Feedback from "../components/feedback/feedback.js";
import { Stack, useRouter } from "expo-router";

const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FAFAFC" }}>
            <Stack.Screen
                options={{
                    headerShadowVisible: false,
                    // headerTransparent: true,
                    headerTitle: "",
                    headerStyle: { backgroundColor: "#FAFAFC" },
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{ flex: 1}}
                >
                    <Feedback />
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Home
