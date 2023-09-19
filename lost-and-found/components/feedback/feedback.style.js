import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flexDirection: "column",
    },

    innerContainer: {
        flexDirection: "column",
        alignItems: "center",
        paddingHorizontal: 10,
    },

    heading: {
        fontFamily: "DMBold",
        fontSize: 26,

    },

    form: {
        paddingVertical: 20,
        flexDirection: "col",
        alignItems: "center",
        justifyContent: "center",

    },

    text: {
        textAlign: "center",
        paddingVertical: 10,
        paddingHorizontal: 10,
        fontSize: 16,
        fontFamily: "DMRegular"
    },

    textInput: {
        borderRadius: 10,
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        width: "75%",
        fontFamily: "DMRegular",
        overflow: 'scroll',
    },

    formText: {
        paddingTop: 30,
        paddingHorizontal: 10,
        paddingBottom: 5,
        fontSize: 16,
        fontFamily: "DMRegular",
    },

    loginBtn: {
        width: "35%",
        backgroundColor: "#9c27b0",
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        padding: 12,

    },

    loginBtnText: {
        fontSize: 18,
        color: "#F3F4F8",
        fontFamily: "DMMedium",
    },
});

export default styles;