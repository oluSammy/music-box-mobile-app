import React from "react";
import {
  CardContent,
  CardImageIcon,
  CardImg,
  CardControlIcon,
  FlowTextContainer,
  FlowSubText,
  FlowMinText,
} from "../styledComponents/flowCard";
import CardGradient from "../Ui/CardGradient";
import FlowText from "./FlowText";
import { FontAwesome } from "@expo/vector-icons";

const PopularFlowCard = () => {
  return (
    <CardContent>
      <CardGradient firstColor="#71EAD4" secondColor="#5E9D6A">
        <CardImageIcon>
          <CardImg
            source={require("../../../assets/images/playlist-img.jpeg")}
          />
          <CardControlIcon activeOpacity={0.6}>
            <FontAwesome name="music" size={24} color="white" />
          </CardControlIcon>
        </CardImageIcon>
        <FlowTextContainer>
          <FlowText color="#6DD462" text="Popular" />
          <FlowSubText>Playlist</FlowSubText>
          <FlowMinText>Playlist title </FlowMinText>
        </FlowTextContainer>
      </CardGradient>
    </CardContent>
  );
};

export default PopularFlowCard;
