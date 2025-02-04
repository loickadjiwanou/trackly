import { View, Text, Image, StatusBar } from "react-native";
import SplashScreen2Style from "./SplashScreen2.style.js";
const SplashScreen2 = (props) => {
  return (
    <View style={SplashScreen2Style.view}>
      <Image
        source={require("../../../assets/splashs/boxs.png")}
        style={SplashScreen2Style.image}
      />
      <View style={SplashScreen2Style.title}>
        <Text style={SplashScreen2Style.text}>
          Create your account in seconds and unlock the full potential of
          Trackly.
        </Text>
        <Text style={SplashScreen2Style.text2}>
          Log in now and explore everything we have to offer.
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
export default SplashScreen2;
