import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

// import {MaterialIcons} from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";

import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import MainTabScreen from "../screens/MainTabScreen";
import PostScreen from "../screens/PostScreen";
import AppStack from "./AppStack";

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value == null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    routeName = "Onboarding";
  } else {
    routeName = "Login";
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={({ navigation }) => ({
          title: "Instacity-signup",
          headerStyle: {
            backgroundColor: "#f9fafd",
            shadowColor: "f9fafd",
            elevation: 0,
          },
        })}
      />
      {/* <Stack.Screen name="Home" component={MainTabScreen} />
      <Stack.Screen
        name="Profile"
        component={MainTabScreen}
        options={() => ({ title: "profile" })}
      />
      <Stack.Screen name="Post" component={PostScreen} /> */}
      <Stack.Screen
        name="AppStack"
        component={AppStack}
        options={() => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
