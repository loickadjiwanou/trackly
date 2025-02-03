import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import colors from "./assets/colors/colors";

// Public screens
import Landing from "./screens/public/Landing";
import SplashScreen1 from "./screens/public/SplashScreen1";
import SplashScreen2 from "./screens/public/SplashScreen2";

// Private screens
import Home from "./screens/private/Home";

// Navigators
const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const SplashScreenTabs = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { display: "none" },
      }}
    >
      <Tab.Screen name="Landing" component={Landing} />
      <Tab.Screen name="SplashScreen1" component={SplashScreen1} />
      <Tab.Screen name="SplashScreen2" component={SplashScreen2} />
      {/* <Tab.Screen
        name="SplashScreen4"
        component={SplashScreen4}
        options={{ tabBarVisible: false }}
        listeners={{
          focus: () => {
            setTimeout(() => {
              navigation.replace("Drawer"); // Redirection automatique
            }, 2000); // Attendre 2s avant de rediriger
          },
        }}
      /> */}
    </Tab.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: colors.black,
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

export default Shell;
