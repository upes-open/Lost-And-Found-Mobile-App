import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    mapContainer: {
        width: 140,
        padding: 24,
        height: 130,
        backgroundColor: "white",
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "black",
        elevation: 6,
    },

    logoContainer: {
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },

    image: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
    },

    mapItem: {
        marginHorizontal: 20,
        marginVertical: 20,
    },

    categoryText: {
        fontSize: 14,
        fontFamily: "DMBold",
        color: "black",
        marginTop: 10,
        paddingHorizontal: -10,
        textAlign: "center",
    },

    desc: {
        fontSize: 16,
        color: "white",
        fontFamily: "DMRegular",
        marginVertical: 10,
        textAlign: "center",
        
    },
});

export default styles;
