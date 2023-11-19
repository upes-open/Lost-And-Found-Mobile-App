import React, { useState, useEffect, useContext } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import styles from "./login.style";
import image from "../../assets/images/login_image.png";
import { getData, storeData } from "../../utils";
import { getUserData } from "../../context/AppContext";

import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";
import {
  TokenResponse,
  exchangeCodeAsync,
  makeRedirectUri,
  useAuthRequest,
  useAutoDiscovery,
} from "expo-auth-session";
import * as SecureStore from "expo-secure-store";
import { useAuth } from "../../context/AuthContext";
import { sendCreateUserReq } from "../../utils/api";

WebBrowser.maybeCompleteAuthSession();

const Login = () => {
  useWarmUpBrowser(); // For UX reasons

  const discovery = useAutoDiscovery(
    "https://login.microsoftonline.com/91cc1fb6-1275-4acf-b3ea-c213ec16257b/v2.0"
  );

  const redirectUri = makeRedirectUri({
    scheme: undefined,
    path: "/(drawer)/home",
  });

  const clientId = "9e01da48-54e9-4470-9513-cfec59568426";

  const [request, , promptAsync] = useAuthRequest(
    {
      clientId,
      scopes: ["openid", "profile", "email", "offline_access"],
      redirectUri,
    },
    discovery
  );

  const { authUser } = useAuth();

  const onLogin = async () => {
    try {
      const codeResponse = await promptAsync();

      if (request && codeResponse.type === "success" && discovery) {
        const result = await exchangeCodeAsync(
          {
            clientId,
            code: codeResponse.params.code,
            extraParams: request.codeVerifier
              ? { code_verifier: request.codeVerifier }
              : undefined,
            redirectUri,
          },
          discovery
        );

        if (result.accessToken) {
          storeData("cachedToken", JSON.stringify(result));

          const { name, unique_name } = jwtDecode(result.accessToken);
          await sendCreateUserReq({ name, unique_name });

          authUser();
        }
      }
    } catch (err) {
      console.error("OAuth Error: " + err.stack);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Text
          style={{
            color: "rgb(156, 39, 176)",
            fontSize: 72,
            fontFamily: "Cookie_400Regular",
          }}
        >
          Lost
        </Text>
        <Text style={{ fontSize: 42 }}> & </Text>
        <Text
          style={{
            color: "rgb(156, 39, 176)",
            fontSize: 72,
            fontFamily: "Cookie_400Regular",
          }}
        >
          Found
        </Text>
      </View>

      <View>
        <Image source={image} resizeMode="contain" style={{ height: 200 }} />
      </View>

      <Text style={styles.welcome}>Welcome!</Text>

      <TouchableOpacity style={styles.loginBtn} onPress={onLogin}>
        <Text style={styles.loginBtnText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
