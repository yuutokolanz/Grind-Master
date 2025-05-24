import { View, Text, Image } from "react-native";
import React from "react";
import { userData } from "../../../../mocks/mockUser";
import GameIcon from "../GameIcon";

export type UserProps = {
  email: string;
  username: string;
  password: string;
  avatar: string;
}

export default function AuthHeader() {
  return (
    <View className="flex-row w-full items-center justify-between bg-zinc-900 p-3" >
      <Image
        className="h-16 w-16"
        source={require("../../../../assets/images/LogoGrindMaster.png")}
      />

      <View className="flex-col items-center w-80 gap-1">
        <GameIcon />

        <Text className="text-center font-bold text-base text-[#544591]">Bem-vindo ao seu campo de treino, {userData[0].username}</Text>
      </View>

      <Image
        className="h-16 w-16 rounded-full"
        src={userData[0].avatar}
      />
    </View>
  );
}
