import { View, Text } from "react-native";
import React, { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useAuth } from "./AuthContext";
import { Cookie_400Regular } from "@expo-google-fonts/cookie";
import { Merienda_400Regular } from "@expo-google-fonts/merienda";

SplashScreen.preventAutoHideAsync();

export default function AppLoader({ children }) {
  // load custom fonts
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
    MontserratRegular: require("../assets/fonts/Montserrat_400Regular.ttf"),
    DMShoulders: require("../assets/fonts/BigShouldersStencilDisplay_400Regular.ttf"),
    Cookie_400Regular,
    Merienda_400Regular,
  });

  const { isLoading } = useAuth();

  // only remove the splash screen when fonts are loaded
  useEffect(() => {
    if (fontsLoaded || !isLoading) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, isLoading]);

  if (!fontsLoaded || isLoading) return null;

  return <>{children}</>;
}
