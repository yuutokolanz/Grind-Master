import { View, Text, TouchableHighlight } from "react-native";
import React from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

type ActionButtonProps = {
  onPress: () => void;
};

export default function ActionButton({ onPress }: ActionButtonProps) {
  return (
    <TouchableHighlight
      className="flex justify-center items-center rounded-full mb-2 bg-indigo-900 w-12 h-12"
      onPress={onPress}
    >
      <FontAwesome6 name="plus" size={24} color="#7CDBD6" />
    </TouchableHighlight>
  );
}
