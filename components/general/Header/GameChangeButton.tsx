import { Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import useGame from "../../../hooks/useGame";

type GameChageButtonProps = {
  onPress: () => void;
};

export default function GameChangeButton({ onPress }: GameChageButtonProps) {
  const {currentGameId} = useGame();
  const gameImages: Record<string, any> = {
      "League of Legends": require("../../../assets/images/iconLoL.jpeg"),
      Valorant: require("../../../assets/images/iconValorant.jpeg"),
      CS2: require("../../../assets/images/iconCS2.jpeg"),
      "TeamFight Tactics": require("../../../assets/images/iconTFT.jpeg"),
    };
  
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={gameImages[currentGameId!]}
        className=" w-14 h-14 rounded-full"
      />
    </TouchableOpacity>
  );
}
