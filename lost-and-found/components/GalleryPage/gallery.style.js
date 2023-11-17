import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  mapContainer: {
    width: 310,
    height: 130,
    backgroundColor: "white",
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "black",
    elevation: 6,
    flexDirection: "row"
  },

  logoContainer: {
    width: 130,
    height: 130,
    padding:5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  heading: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: " center",
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },

  mapItem: {
    marginHorizontal: 40,
    marginVertical: 15,
  },

  categoryText: {
    fontSize: 15,
    fontFamily: "DMMedium",
    color: "black",
    marginTop: 10,
    paddingHorizontal: -10,
    textAlign: "center",
  },
});

export default styles;
