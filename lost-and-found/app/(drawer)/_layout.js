import { Stack } from "expo-router";
import { useCallback } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Cookie_400Regular } from '@expo-google-fonts/cookie';
import { Merienda_400Regular } from '@expo-google-fonts/merienda';
import { Drawer } from "expo-router/drawer";

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
        <View style={{ flex: 1, marginTop: -30}}>
            <Drawer screenOptions={{ headerShown: false}} onLayout={onLayoutRootView}>
                <Drawer.Screen
                    name="login"
                    options={{
                        drawerLabel: "Login",
                        title: "Login",
                    }}
                />

                <Drawer.Screen
                    name="feedback"
                    options={{
                        drawerLabel: "Feedback",
                        title: "Feedback"
                    }}
                />

            </Drawer>
        </View>
    );
}

export default Layout;