import React from "react";
import {
  CardContent,
  CardImageIcon,
  CardImg,
  CardControlIcon,
  FlowTextContainer,
  FlowTextTitle,
  FlowSubText,
  FlowMinText,
} from "../styledComponents/flowCard";
import CardGradient from "../Ui/CardGradient";
import { Entypo } from "@expo/vector-icons";

const ControlFlow = () => {
  return (
    <CardContent>
      <CardGradient firstColor="#B3BBC8" secondColor="#7B8089">
        <CardImageIcon>
          <CardImg source={require("../../../assets/images/player-img.jpg")} />
          <CardControlIcon activeOpacity={0.6}>
            <Entypo name="controller-play" size={24} color="white" />
          </CardControlIcon>
        </CardImageIcon>
        <FlowTextContainer>
          <FlowTextTitle>Control</FlowTextTitle>
          <FlowSubText>Player</FlowSubText>
          <FlowMinText>Current Song appears here</FlowMinText>
        </FlowTextContainer>
      </CardGradient>
    </CardContent>
  );
};

export default ControlFlow;
