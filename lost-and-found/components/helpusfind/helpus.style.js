import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: -10,
    alignItems: "center",
    backgroundColor: "#98b7e5",
    borderTopLeftRadius: 80,
    paddingVertical: 20,
    marginTop: 0,
  },

  cardContainer: {
    width: 280,
    paddingHorizontal: 14,
    marginTop: 100,
    marginLeft: 15,
    marginRight: 15,
    height: 400,
    backgroundColor: "#e9ecef",
    borderRadius: 16,

    elevation: 20,
  },

  heading: {
    fontFamily: "DMBold",
    fontSize: 40,
    fontFamily: "DMShoulders",
  },

  spinner: {
    marginTop: 50,
    height: 50,
    width: 50,
  },

  logoImage: {
    width: "110%",
    height: "110%",
    borderRadius: 16,
    overflow: "hidden",
  },

  logoContainer: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    height: 200,
    alignItems: "center",
  },

  applyBtn: {
    backgroundColor: "#9c27b0",
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
    borderRadius: 16,
    paddingVertical: 10,
    width: 150,

  },

  category: {
    marginTop: 40,
    paddingHorizontal: 10,
  },

  categoryText: {
    fontSize: 18,
    fontFamily: "DMRegular",
    marginVertical: 10,
  },

  descText: {
    paddingHorizontal: 10,
    fontSize: 16,
    fontFamily: "DMMedium",
    color: "grey",
  },

  background: {
    marginTop: 10,
    height: 600,
  },

  backgroundImage: {
    borderRadius: 20,
    position: "absolute",
    right: 30,
    top: -45,
    height: 220,
    width: 340,

  }

});

export default styles;
