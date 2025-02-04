import { View, Text, Image, StatusBar } from "react-native";
import SplashScreen1Style from "./SplashScreen1.style.js";
const SplashScreen1 = (props) => {
  return (
    <View style={SplashScreen1Style.view}>
      <Image
        source={require("../../../assets/splashs/door.png")}
        style={SplashScreen1Style.image}
      />
      <View style={SplashScreen1Style.title}>
        <Text style={SplashScreen1Style.text}>
          Smooth and intuitive navigation to get straight to what matters.
        </Text>
        <Text style={SplashScreen1Style.text2}>
          Quickly find what you need, without any hassle.
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
export default SplashScreen1;
