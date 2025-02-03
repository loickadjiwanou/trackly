import { View, Text, Image } from "react-native";
import SplashScreen2Style from "./SplashScreen2.style.js";
import colors from "../../../assets/colors/colors";
const SplashScreen2 = (props) => {
  return (
    <View style={SplashScreen2Style.view}>
      <Image
        source={require("../../../assets/splashs/services.png")}
        style={SplashScreen2Style.image}
      />
    </View>
  );
};
export default SplashScreen2;
