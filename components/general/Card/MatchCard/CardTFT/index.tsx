import { View, Text } from "react-native";
import React from "react";
import { MatchCardPropsTFT } from "../../../../../constants/matchesTypes";

export default function CardTFT({
  matchType,
  date,
  placement,
  augments,
  traits,
}: MatchCardPropsTFT) {
  return (
    <View className="h-48">
      <Text className="text-center text-[#7C75DB] text-base font-semibold">
        {matchType === "Last" ? "Última Partida" : "Melhor Partida"}
      </Text>

      <View className="flex-row justify-between mt-2">
        <Text className="text-[#7CDBD6] text-sm">{date}</Text>
        <Text
          className={`text-sm font-bold ${
            placement < 5 ? "text-green-400" : "text-red-400"
          }`}
        >
          {placement}° Lugar
        </Text>
      </View>

      <View className="w-full h-0 border-b border-[#7CDBD6] my-2" />
      <Text className="text-[#7C75DB] text-base font-semibold text-center">
        Características: {traits}
      </Text>
      <View className="w-full h-0 border-b border-[#7CDBD6] my-2" />
      <Text className="text-[#7C75DB] text-base font-semibold text-center">
        Aprimoramentos: {augments}
      </Text>
    </View>
  );
}
