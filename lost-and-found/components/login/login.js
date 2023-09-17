
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './login.style';
import image from "../../assets/images/login_image.png";

const login = () => {
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

            <TouchableOpacity style={styles.loginBtn} onPress={() => console.log("hello")}>
                <Text style={styles.loginBtnText}>Sign In</Text>
            </TouchableOpacity>


        </View>
    )
}

export default login
