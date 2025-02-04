import { View, Text, Image, StatusBar } from "react-native";
import LandingStyle from "./Landing.style.js";
const Landing = (props) => {
  return (
    <View style={LandingStyle.view}>
      <Image
        source={require("../../../assets/splashs/woman.png")}
        style={LandingStyle.image}
      />
      <View style={LandingStyle.title}>
        <Text style={LandingStyle.text}>
          Discover a new, faster, and more seamless experience.
        </Text>
        <Text style={LandingStyle.text2}>
          Access an intuitive platform designed to make your life easier.
        </Text>
      </View>
      <StatusBar
        barStyle={"dark-content"}
        translucent={true}
        backgroundColor="transparent"
      />
    </View>
  );
};
export default Landing;
