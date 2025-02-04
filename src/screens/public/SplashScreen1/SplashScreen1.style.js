import { StyleSheet } from "react-native";
import colors from "../../../assets/colors/colors";
import fonts from "../../../assets/fonts/font";
const SplashScreen1Style = StyleSheet.create({
  view: {
    flex: 1,
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
  title: {
    position: "absolute",
    bottom: 140,
  },
  text: {
    fontSize: fonts.xlarge,
    fontFamily: "FredokaMedium",
    color: colors.white,
    textAlign: "left",
    paddingHorizontal: 20,
    lineHeight: 30,
    textShadowColor: "rgba(0, 0, 0, 0.6)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
    bottom: 10,
  },
  text2: {
    fontSize: fonts.small,
    fontFamily: "FredokaRegular",
    color: colors.white,
    textAlign: "left",
    paddingHorizontal: 20,
    textShadowColor: "rgba(0, 0, 0, 0.6)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
  },
});
export default SplashScreen1Style;
