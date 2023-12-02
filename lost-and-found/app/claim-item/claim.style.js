import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 30,
    paddingBottom: 10,
  },

  heading: {
    fontFamily: "DMBold",
    fontSize: 22,
  },

  textinput: {
    fontSize: 16,
    fontFamily: "DMRegular",
    marginTop: 10,
    padding: 3,
  },

  input: {
    fontFamily: "DMRegular",
    width: "100%",
    height: "100%",
    paddingHorizontal: 16,
    marginLeft: 35,
  },

  inputContainer: {
    flex: 1,
    backgroundColor: "#F3F4F8",
    marginRight: 12,
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 0.25,
    height: 50,
    width: "100%",
  },

  loginBtn: {
    width: "100%",
    backgroundColor: "#9c27b0",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    margin: 20,
  },

  loginBtnText: {
    fontSize: 16,
    color: "#F3F4F8",
    fontFamily: "DMRegular",
  },

  selectBtn: {
    width: "100%",
    backgroundColor: "#0275d8",
    padding: 12,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },

  imageContainer: {
    width: 40,
    height: 40,
    position: "absolute",
    backgroundColor: "#9c27b0",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    left: 5,
  },
});

export default styles;
