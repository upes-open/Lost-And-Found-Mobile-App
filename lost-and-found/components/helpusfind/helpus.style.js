import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: "center",
  },

  cardContainer: {
    width: 300,
    padding: 24,
    marginTop: 70,
    marginLeft: 20,
    height: 440,
    backgroundColor: "#dbe7eb",
    borderRadius: 16,
    shadowColor: "white",
  },

  heading: {
    fontFamily: "DMBold",
    fontSize: 50,
    fontFamily: "Cookie_400Regular",
  },

  spinner: {
    marginTop: 50,
    height: 50,
    width: 50,
  },

  logoImage: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
    overflow: "hidden",
  },

  logoContainer: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    height: 270,
    alignItems: "center",
  },

  applyBtn: {
    backgroundColor: "#9c27b0",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    borderRadius: 16,
    paddingVertical: 10,
    width: 150,

  },

  category: {
    marginTop: 20,
  },

  categoryText: {
    fontSize: 18,
    fontFamily: "DMRegular",
  },

  descText: {
    fontSize: 16,
    fontFamily: "DMMedium",
    color: "grey",
  }

});

export default styles;
