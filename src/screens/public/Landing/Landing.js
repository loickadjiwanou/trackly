import { View, Text, Image } from "react-native";
import LandingStyle from "./Landing.style.js";
import colors from "../../../assets/colors/colors";
const Landing = (props) => {
  return (
    <View style={LandingStyle.view}>
      <Image
        source={require("../../../assets/splashs/woman.png")}
        style={LandingStyle.image}
      />
    </View>
  );
};
export default Landing;
