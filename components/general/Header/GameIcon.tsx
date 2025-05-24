import { Image, TouchableOpacity } from "react-native";
import React from "react";

export default function GameIcon() {
  return (
    <TouchableOpacity>
      <Image
        source={require('../../../assets/images/IconLoL.jpeg')}
        className=" w-14 h-14 rounded-full"
      />
    </TouchableOpacity>
  );
}
