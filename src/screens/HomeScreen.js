import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import PostCard from "../components/PostCard";

import { Container, FlastListSize } from "../utils/FeedStyles";

const Posts = [
  {
    id: "1",
    userName: "Afsana Airin",
    userImg: require("../../assets/userPhoto/airin.jpg"),
    post: "Hello, good evening everyone!",
    postImg: require("../../assets/userPhoto/airinp.jpg"),
  },
  {
    id: "2",
    userName: "Rezab Ud Dawla",
    userImg: require("../../assets/userPhoto/rezab.jpg"),
    post: "Hi, I am depressed!",
    postImg: require("../../assets/userPhoto/rezabp.jpg"),
  },
  {
    id: "3",
    userName: "Shahariar Tahsin Rifat",
    userImg: require("../../assets/userPhoto/rifat.jpg"),
    post: "Trying to be oversmart",
    postImg: require("../../assets/userPhoto/rifat.jpg"),
  },
  {
    id: "4",
    userName: "Sharita Rahman",
    userImg: require("../../assets/userPhoto/sharita.jpg"),
    post: "always busy",
    postImg: require("../../assets/userPhoto/sharita.jpg"),
  },
  {
    id: "5",
    userName: "Afsana Airin",
    userImg: require("../../assets/userPhoto/airin.jpg"),
    post: "yellow flower",
    postImg: require("../../assets/userPhoto/flower.jpg"),
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <FlastListSize
        data={Posts}
        renderItem={({ item }) => <PostCard item={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#fff",
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   cardStyle: {},
// });
