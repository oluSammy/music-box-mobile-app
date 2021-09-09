import styled from "styled-components/native";

export const CardContent = styled.View`
  flex: 1;
  height: 150px;
  width: 250px;
  margin-right: 20px;
`;

export const CardImageIcon = styled.View`
  align-items: center;
`;

export const CardImg = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 7px;
`;

export const CardControlIcon = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  background-color: #000000;
  margin-top: -24px;
  border-radius: 50px;
  opacity: 0.65;
  justify-content: center;
  align-items: center;
`;

export const FlowTextContainer = styled.View`
  flex: 0.7;
`;

export const FlowTextTitle = styled.Text`
  text-align: center;
  color: #b2c5c8;
  font-family: Lato_900Black;
  font-size: 20px;
  margin-bottom: 15px;
`;

export const FlowSubText = styled.Text`
  text-align: center;
  color: #ffffff;
  font-family: Lato_700Bold;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const FlowMinText = styled.Text`
  text-align: center;
  font-size: 12px;
  color: #384d6d;
`;
