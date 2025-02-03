import { View, Text, Image } from "react-native";
import SplashScreen1Style from "./SplashScreen1.style.js";
import colors from "../../../assets/colors/colors";
const SplashScreen1 = (props) => {
  return (
    <View style={SplashScreen1Style.view}>
      <Image
        source={require("../../../assets/splashs/door.png")}
        style={SplashScreen1Style.image}
      />
    </View>
  );
};
export default SplashScreen1;
