import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

interface GameIconProps {
  onPress?: () => void;
  gameName?: string;
}

export default function GameIcon({ onPress, gameName }: GameIconProps) {
  const gameImages: Record<string, any> = {
    "League of Legends": require("../../../assets/images/iconLoL.jpeg"),
    Valorant: require("../../../assets/images/iconValorant.jpeg"),
    CS2: require("../../../assets/images/iconCS2.jpeg"),
    "TeamFight Tactics": require("../../../assets/images/iconTFT.jpeg"),
  };
  
  return (
    <TouchableOpacity
      className="flex-row justify-between items-center w-60 rounded-s-lg m-1 bg-slate-800 py-1 px-2 rounded-lg"
      onPress={onPress}
    >
      <Image
        source={gameImages[gameName!]}
        className="w-16 h-16 rounded-full"
      />

      <Text className="text-start text-lg font-semibold text-violet-800">{gameName}</Text>
    </TouchableOpacity>
  );
}
