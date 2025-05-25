import { View, Text, Image } from "react-native";
import React from "react";

export default function LoginHeader() {
  return (
    <View className="flex-row w-full items-center justify-between bg-zinc-900 p-2">
      <Image
        className="h-20 w-20"
        source={require("../../../../assets/images/LogoGrindMaster.png")}
      />
    </View>
  );
}
