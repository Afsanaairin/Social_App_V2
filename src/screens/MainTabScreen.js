import React, { useLayoutEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

// import MaterialCommunityIcons from "reac-native-vector-icons/MaterialCommunityIcons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import HomeScreen from "./HomeScreen";
// import DetailsScreen from './DetailsScreen';
// import ExploreScreen from './ExploreScreen';
import ProfileScreen from "./ProfileScreen";
import PostScreen from "./PostScreen";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const HomeStack = createStackNavigator();

const MainTabScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Instacity",
      headerRight: () => (
        <View style={{ marginRight: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Post")}>
            <AntDesign name="plus" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  return (
    <Tab.Navigator
    // initialRouteName="Home"
    // activeColor="#fff"
    //   barStyle={{ backgroundColor: '' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarColor: "#009387",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default MainTabScreen;
