import styled from "styled-components/native";
import { Entypo } from "@expo/vector-icons";

export const StyledBox = styled.View`
  margin-right: 15px;
  max-width: 100px;
`;

export const StyledBoxVar = styled.View`
  max-width: 100px;
  margin-bottom: 20px;
  margin-right: 20px;
`;

export const StyledTouchBox = styled.TouchableOpacity`
  height: 100px;
  width: 100px;
`;

export const RoundedImgBg = styled.ImageBackground`
  flex: 1;
  justify-content: flex-end;
  padding: 10px;
`;

export const StyledIconBox = styled.View`
  height: 30px;
  width: 30px;
  background-color: #000000;
  opacity: 0.7;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

export const LikeIcon = styled(Entypo)`
  opacity: 0.8;
`;

export const LikeBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LikeText = styled.Text`
  color: #ffffff;
  margin-left: 5px;
`;

export const LikeTitle = styled.Text`
  color: #ffffff;
  font-family: "Lato_700Bold";
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const LikeTitleVar = styled.Text`
  color: #ffffff;
  font-family: "Lato_700Bold";
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 5px;
  text-align: center;
`;
