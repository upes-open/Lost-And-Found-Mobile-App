import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Cookie_400Regular } from '@expo-google-fonts/cookie';
import { Merienda_400Regular } from '@expo-google-fonts/merienda';

SplashScreen.preventAutoHideAsync();

const Layout = () => {

    // load custom fonts
    const [fontsLoaded] = useFonts({
        DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
        DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
        DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
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

    return <Stack onLayout={onLayoutRootView} />
}

export default Layout;