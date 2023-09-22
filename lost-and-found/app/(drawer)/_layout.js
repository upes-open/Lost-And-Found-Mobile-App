import { Stack } from "expo-router";
import { useCallback, useContext, useState } from "react";
import { View, Text, Image, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Cookie_400Regular } from '@expo-google-fonts/cookie';
import { Merienda_400Regular } from '@expo-google-fonts/merienda';
import { Drawer } from "expo-router/drawer";
import { DrawerItemList } from "@react-navigation/drawer";
import { AppProvider } from "../../context/AppContext";
import DrawerMenu from "../../components/drawer/DrawerMenu";

import {
    SimpleLineIcons,
    MaterialIcons,
    MaterialCommunityIcons,
    FontAwesome
} from "@expo/vector-icons";


SplashScreen.preventAutoHideAsync();

const Layout = () => {

    // load custom fonts
    const [fontsLoaded] = useFonts({
        DMBold: require("../../assets/fonts/DMSans-Bold.ttf"),
        DMMedium: require("../../assets/fonts/DMSans-Medium.ttf"),
        DMRegular: require("../../assets/fonts/DMSans-Regular.ttf"),
        MontserratRegular: require("../../assets/fonts/Montserrat_400Regular.ttf"),
        Cookie_400Regular,
        Merienda_400Regular,
    })

    // only remove the splash screen when fonts are loaded
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) return null;


    return (
        <AppProvider>
            <View style={{ flex: 1, marginTop: -30 }}>
                <Drawer
                    screenOptions={{
                        headerShown: false,
                        drawerStyle: {
                            backgroundColor: "#fff",
                            width: 250
                        },
                        headerStyle: {
                            backgroundColor: "#f4511e",
                        },
                        drawerLabelStyle: {
                            color: "#111"
                        }
                    }}

                    onLayout={onLayoutRootView}

                    drawerContent={
                        (props) => {
                            return (
                                <SafeAreaView>
                                    <DrawerMenu />
                                    <DrawerItemList {...props} />
                                </SafeAreaView>
                            )
                        }
                    }
                >
                    <Drawer.Screen
                        name="login"
                        options={{
                            drawerLabel: "Login",
                            title: "Login",
                            drawerIcon: () => (
                                <SimpleLineIcons name="home" size={20} color="#808080" />
                            )
                        }}
                    />

                    <Drawer.Screen
                        name="feedback"
                        options={{
                            drawerLabel: "Feedback",
                            title: "Feedback",
                            drawerIcon: () => (
                                <MaterialIcons name="dashboard-customize" size={20} color="#808080" />
                            )
                        }}

                    />

                </Drawer>
            </View>
        </AppProvider>
    );
}

export default Layout;