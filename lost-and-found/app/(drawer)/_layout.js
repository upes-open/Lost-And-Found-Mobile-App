import { useCallback } from "react";
import { View, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Cookie_400Regular } from "@expo-google-fonts/cookie";
import { Merienda_400Regular } from "@expo-google-fonts/merienda";
import { Drawer } from "expo-router/drawer";
import { DrawerItemList } from "@react-navigation/drawer";
import { AppProvider } from "../../context/AppContext";
import DrawerMenu from "../../components/drawer/DrawerMenu";
import { ClerkProvider } from "@clerk/clerk-expo";
import {
  SimpleLineIcons,
  MaterialIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";
import { AuthProvider, useAuth } from "../../context/AuthContext";
import AppLoader from "../../context/AppLoader";

const Layout = () => {
  return (
    <AppProvider>
      <AuthProvider>
        <AppLoader>
          <View style={{ flex: 1, marginTop: -30, backgroundColor: "#fff" }}>
            <Drawer
              screenOptions={{
                headerShown: false,
                drawerStyle: {
                  backgroundColor: "#fff",
                  width: 250,
                },
                headerStyle: {
                  backgroundColor: "#f4511e",
                },
                drawerLabelStyle: {
                  color: "#111",
                },
              }}
              // onLayout={onLayoutRootView}
              drawerContent={(props) => {
                return (
                  <SafeAreaView>
                    <DrawerMenu />
                    <DrawerItemList {...props} />
                  </SafeAreaView>
                );
              }}
            >
              <Drawer.Screen
                name="home"
                options={{
                  drawerLabel: "Home",
                  title: "Home",
                  drawerIcon: () => (
                    <MaterialIcons name="home" size={20} color="#808080" />
                  ),
                }}
              />

              <Drawer.Screen
                name="login"
                options={{
                  drawerLabel: "Login",
                  title: "Login",
                  drawerIcon: () => (
                    <MaterialIcons name="login" size={20} color="#808080" />
                  ),
                }}
              />

              <Drawer.Screen
                name="lostItems"
                options={{
                  drawerLabel: "Lost Item Details",
                  title: "LostItem",
                  drawerIcon: () => (
                    <MaterialIcons name="dashboard" size={20} color="#808080" />
                  ),
                }}
              />

              <Drawer.Screen
                name="help_us_find"
                options={{
                  drawerLabel: "Help Us Find",
                  title: "HelpUs",
                  drawerIcon: () => (
                    <MaterialIcons name="live-help" size={20} color="#808080" />
                  ),
                }}
              />

              <Drawer.Screen
                name="foundItems"
                options={{
                  drawerLabel: "Found Item Details",
                  title: "FoundItem",
                  drawerIcon: () => (
                    <FontAwesome name="search" size={20} color="#808080" />
                  ),
                }}
              />

              <Drawer.Screen
                name="feedback"
                options={{
                  drawerLabel: "Feedback",
                  title: "Feedback",
                  drawerIcon: () => (
                    <MaterialIcons name="feedback" size={20} color="#808080" />
                  ),
                }}
              />
              <Drawer.Screen
                name="profile_page"
                options={{
                  drawerLabel: "Profile",
                  title: "profile",
                  drawerIcon: () => (
                    <SimpleLineIcons name="user" size={20} color="#808080" />
                  ),
                }}
              />
              <Drawer.Screen
                name="faqs"
                options={{
                  drawerLabel: "FAQs",
                  title: "Frequently Asked Questions",
                  drawerIcon: () => (
                    <FontAwesome5
                      name="question-circle"
                      size={20}
                      color="#808080"
                    />
                  ),
                }}
              />
            </Drawer>
          </View>
        </AppLoader>
      </AuthProvider>
    </AppProvider>
  );
};

export default Layout;
