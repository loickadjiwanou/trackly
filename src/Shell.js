import React from "react";
import { View, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import {
  NavigationContainer,
  useNavigation,
  useNavigationState,
  TabActions,
} from "@react-navigation/native";
import colors from "./assets/colors/colors";

// Public screens
import Landing from "./screens/public/Landing";
import SplashScreen1 from "./screens/public/SplashScreen1";
import SplashScreen2 from "./screens/public/SplashScreen2";
import Login from "./screens/public/Login";

// Private screens
import Home from "./screens/private/Home";

// Navigators
const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

// Custom button
import CustomButton from "./components/CustomButton/CustomButton";

const SplashScreenTabs = () => {
  const navigation = useNavigation();
  const tabState = useNavigationState(
    (state) => state.routes.find((r) => r.name === "SplashScreens")?.state
  );

  const currentIndex = tabState?.index || 0;
  const routes = tabState?.routes || [];

  const handlePress = () => {
    if (currentIndex < routes.length - 1) {
      navigation.navigate("SplashScreens", {
        screen: routes[currentIndex + 1].name,
      });
    } else {
      navigation.navigate("Login");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { display: "none" },
          animationEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
          swipeEnabled: true,
          tabBarOptions: {
            style: { display: "none" },
          },
        }}
      >
        <Tab.Screen name="Landing" component={Landing} />
        <Tab.Screen name="SplashScreen1" component={SplashScreen1} />
        <Tab.Screen name="SplashScreen2" component={SplashScreen2} />
      </Tab.Navigator>
      <View style={styles.buttonContainer}>
        <CustomButton
          title={currentIndex !== 2 ? "Continue" : "Get Started"}
          uppercase={false}
          titleColor={colors.white}
          type={"solid"}
          borderRadius={15}
          borderColor={colors.green}
          buttonHeight={55}
          buttonWidth={360}
          isDisabled={false}
          disabledBackgroundColor={colors.lightgray}
          disabledBorderColor={colors.lightgray}
          color={colors.green}
          loading={false}
          loaderSize={30}
          loaderColor={colors.white}
          raised={false}
          handlePress={handlePress}
        />
      </View>
    </View>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: colors.white,
          width: 240,
        },
        drawerLabelStyle: {
          color: colors.white,
        },
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreens" component={SplashScreenTabs} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

const Shell = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    zIndex: 10,
    // paddingHorizontal: 20,
    // paddingVertical: 10,
    // borderRadius: 10,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.2,
    // shadowRadius: 4,
  },
});

export default Shell;
