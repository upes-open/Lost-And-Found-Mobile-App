import React from 'react'
import { View, Text, Image} from "react-native";
import user from "../../assets/images/user.png"
import { getUserData } from '../../context/AppContext';

const DrawerMenu = () => {

    const { userData, setUserData } = getUserData();

    return (
        <View
            style={{
                paddingTop: 45,
                paddingBottom: 10,
                marginBottom: 10,
                width: '100%',
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#dbe7eb",
            }}
        >
            <Image
                source={user}
                style={{
                    height: 70,
                    width: 70,
                    borderRadius: 65
                }}
            />

            <Text
                style={{
                    paddingTop: 10,
                    fontSize: 18,
                    marginVertical: 6,
                    fontWeight: "bold",
                    color: "#111"
                }}
            >{userData?.name}</Text>

            <Text
                style={{
                    fontSize: 14,
                    marginVertical: 6,
                    fontFamily: "DMRegular",
                    color: "#111"
                }}
            >{userData?.email}</Text>

        </View>
    )
}

export default DrawerMenu;
