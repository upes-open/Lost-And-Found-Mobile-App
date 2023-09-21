import React, { useState, useEffect } from 'react';

import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './login.style';
import image from "../../assets/images/login_image.png";

import * as WebBrowser from 'expo-web-browser';
import {
    exchangeCodeAsync,
    makeRedirectUri,
    useAuthRequest,
    useAutoDiscovery,
} from 'expo-auth-session';

WebBrowser.maybeCompleteAuthSession();

const Login = () => {

    const discovery = useAutoDiscovery(
        'https://login.microsoftonline.com/91cc1fb6-1275-4acf-b3ea-c213ec16257b/v2.0',
    );

    const redirectUri = makeRedirectUri();
    const clientId = 'b985ca02-0481-409c-9b83-0a7248e1bc3e';

    const [token, setToken] = useState(null);

    const [request, response, promptAsync] = useAuthRequest(
        {
            clientId,
            scopes: ['openid', 'profile', 'email', 'offline_access'],
            redirectUri,
        },
        discovery,
    );

    useEffect(() => {
      console.log(token);
    
    }, [token]);
    

    const handleSignIn = () => {
        promptAsync().then((codeResponse) => {
            if (request && codeResponse?.type === 'success' && discovery) {
                exchangeCodeAsync(
                    {
                        clientId,
                        code: codeResponse.params.code,
                        extraParams: request.codeVerifier
                            ? { code_verifier: request.codeVerifier }
                            : undefined,
                        redirectUri,
                    },
                    discovery,
                ).then((res) => {
                    setToken(res.accessToken);
                });
            }
        });
    };

    return (
        <View style={styles.container}>

            <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Text style={{ color: "rgb(156, 39, 176)", fontSize: 72, fontFamily: "Cookie_400Regular" }}>Lost</Text>
                <Text style={{ fontSize: 42 }}> & </Text>
                <Text style={{ color: "rgb(156, 39, 176)", fontSize: 72, fontFamily: "Cookie_400Regular" }}>Found</Text>
            </View>

            <View >
                <Image
                    source={image}
                    resizeMode="contain"
                    style={{ height: 200 }}
                />
            </View>

            <Text style={styles.welcome}>Welcome!</Text>

            <TouchableOpacity style={styles.loginBtn} disabled={!request} onPress={handleSignIn}>
                <Text style={styles.loginBtnText}>Sign In</Text>
            </TouchableOpacity>


        </View>
    )
}

export default Login
