import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    loginBtn: {
        width: "60%",
        backgroundColor: "#9c27b0",
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        padding: 12,
        marginTop:60,
    },

    loginBtnText: {
        fontSize: 18,
        color: "#F3F4F8",
        fontFamily: "DMBold",
    },

    welcome: {
        fontSize: 42,
        marginBottom: 32,
        color: "rgb(51, 51, 51)",
        fontFamily: "Merienda_400Regular",
        marginTop: 80,
    }

});

export default styles;