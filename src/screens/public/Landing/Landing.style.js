import { StyleSheet } from "react-native";
import colors from "../../../assets/colors/colors";
const LandingStyle = StyleSheet.create({
  view: {
    flex: 1,
    // paddingTop: 55,
    // backgroundColor: colors.white,
    // paddingHorizontal: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "center",
  },
  button: {
    position: "absolute",
    bottom: 75,
    width: "100%",
    alignItems: "center",
  },
});
export default LandingStyle;
