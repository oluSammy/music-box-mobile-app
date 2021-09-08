import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";

export const StyledSafeArea = styled(SafeAreaView)`
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  flex: 1;
`;

export const SafeAreaBg = styled.ScrollView`
  ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px`};
  flex: 1;
`;
