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
import { Ionicons } from "@expo/vector-icons";

const CreatePlaylistCardFlow = () => {
  return (
    <CardContent>
      <CardGradient firstColor="#65B1F2" secondColor="#527CA0">
        <CardImageIcon>
          <CardImg
            source={require("../../../assets/images/create-paylist-img.png")}
          />
          <CardControlIcon activeOpacity={0.6}>
            <Ionicons name="add-outline" size={24} color="white" />
          </CardControlIcon>
        </CardImageIcon>
        <FlowTextContainer>
          <FlowText color="#b2c5c8" text="Create" />
          <FlowSubText>Playlist</FlowSubText>
          <FlowMinText>Create Playlist here</FlowMinText>
        </FlowTextContainer>
      </CardGradient>
    </CardContent>
  );
};

export default CreatePlaylistCardFlow;
