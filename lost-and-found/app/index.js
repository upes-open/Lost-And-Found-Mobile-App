import React from 'react'
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import Login from '../components/login/login';
import { Redirect, Stack, useRouter } from "expo-router";

const Home = () => {
    return (

        <Redirect href={"(drawer)/login"} />

    )

}

export default Home
