import { View, Text } from "react-native";
import React from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import {
  Container,
  Card,
  UserInfo,
  UserImg,
  UserName,
  UserInfoText,
  PostTime,
  PostText,
  PostImg,
  InteractionWrapper,
  Interaction,
  InteractionText,
  Scroll,
} from "../utils/FeedStyles";

const PostCard = ({ item }) => {
  return (
    <Card>
      <UserInfo>
        <UserImg source={item.userImg} />
        <UserInfoText />
        <UserName> {item.userName} </UserName>
        {/* <PostTime>Now </PostTime> */}
      </UserInfo>
      <PostText>{item.post}</PostText>
      <PostImg source={item.postImg} />
      <InteractionWrapper>
        <Interaction active>
          <AntDesign name="hearto" size={24} color="black" />
          <InteractionText> Like</InteractionText>
        </Interaction>
        <Interaction>
          <FontAwesome name="comment-o" size={24} color="black" />
          <InteractionText> Comment</InteractionText>
        </Interaction>
      </InteractionWrapper>
    </Card>
  );
};

export default PostCard;
