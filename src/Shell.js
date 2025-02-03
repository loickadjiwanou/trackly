import React from "react";
import { View, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  useNavigation,
  useNavigationState,
} from "@react-navigation/native";
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

// Custom button
import CustomButton from "./components/CustomButton/CustomButton";

const TextComponent = (screen) => {
  return (
    <View>
      <Text>Text</Text>
    </View>
  );
};

const Button = (screen) => {
  return (
    <View style={styles.buttonContainer}>
      <CustomButton
        title={`Continuer`} // Affiche le bon écran actif
        uppercase={false}
        titleColor={colors.white}
        type={"solid"}
        borderRadius={15}
        borderColor={colors.white}
        buttonHeight={55}
        isDisabled={false}
        disabledBackgroundColor={colors.lightgray}
        disabledBorderColor={colors.lightgray}
        color={colors.green}
        loading={false}
        loaderSize={30}
        loaderColor={colors.white}
        raised={false}
        handlePress={() => {}}
      />
    </View>
  );
};

const SplashScreenTabs = () => {
  const navigation = useNavigation();
  const currentRoute = useNavigationState(
    (state) => state.routes[state.index]?.name
  );
  console.log(currentRoute);
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { display: "none" },
        }}
      >
        <Tab.Screen name="Landing" component={Landing} />
        <Tab.Screen name="SplashScreen1" component={SplashScreen1} />
        <Tab.Screen name="SplashScreen2" component={SplashScreen2} />
      </Tab.Navigator>
      <Button screen="Button" />
    </View>
  );
};

const ScreenWithButton = (ScreenComponent) => {
  return (props) => {
    return (
      <View style={{ flex: 1 }}>
        <ScreenComponent {...props} />
        <View style={styles.buttonContainer}>
          <CustomButton
            title={`Écran: ${props.route.name}`}
            handlePress={() => {}}
          />
        </View>
      </View>
    );
  };
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
    bottom: 20,
    left: "50%",
    transform: [{ translateX: -50 }],
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 10,
    zIndex: 10,
  },
});

export default Shell;
