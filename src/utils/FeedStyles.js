import styled from "styled-components/native";
import HomeScreen from "../screens/HomeScreen";
import React from "react";

export const Container = styled.View`
  flex: 1px;
  // justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  // width: 100%;
  // margin-left: -30px;
`;
export const FlastListSize = styled.FlatList`
  width: 100%;
`;

export const Card = styled.View`
  background-color: #f8f8f8;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 10px;
`;
export const UserInfo = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  padding: 15px;
`;
export const UserImg = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;
export const UserInfoText = styled.View`
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  align-items: center;
`;
export const UserName = styled.Text`
  font-size: 14px;
  font-weight: bold;
  font-style: "Lato-Regular";
  margin-top: 12px;
`;
export const PostTime = styled.Text`
  font-size: 12px;
  font-family: monospace;
  color: #666;
`;
export const PostText = styled.Text`
  font-size: 14px;
  font-family: Lato-regular;
`;
export const PostImg = styled.Image`
  width: 100%;
  height: 300px;
  margin-top: 20px;
`;
export const InteractionWrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 15px;
`;
export const Interaction = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  border-radius: 5px;
  padding: 2px 5px;
  color: ${(props) => (props.active ? "pink" : "transparent")};
`;
export const InteractionText = styled.Text`
  font-size: 12px;
  font-family: lato-Regular;
  font-weight: bold;
  color: #333;
  margin-top: 3px;
  margin-left: 5px;
`;
