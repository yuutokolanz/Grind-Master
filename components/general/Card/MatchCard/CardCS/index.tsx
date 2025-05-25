import { View, Text, Image } from "react-native";
import React from "react";
import { MatchCardPropsCS2 } from "../../../../../constants/matchesTypes";

export default function CardCS({
  matchType,
  date,
  result,
  kd,
  map,
  mapIcon,
  hs_percent,
  mvps
}: MatchCardPropsCS2) {
  return (
      <View>
        <Text className="text-center text-[#7C75DB] text-base font-semibold">
          {matchType === "Last" ? "Última Partida" : "Melhor Partida"}
        </Text>

        <View className="flex-row justify-between mt-2">
          <Text className="text-[#7CDBD6] text-sm">{date}</Text>
          <Text
            className={`text-sm font-bold ${
              result === "Vitória" ? "text-green-400" : "text-red-400"
            }`}
          >
            {result}
          </Text>
        </View>

        <View className="flex-row justify-between items-center mt-2">
          <View className="flex-col items-start">
            <Text className="text-[#7C75DB] text-base font-semibold">
              {map}
            </Text>
            <Text className="text-[#7C75DB] text-xs mt-1">MVPs: {mvps}</Text>
            <Text className="text-[#7C75DB] text-xs mt-1">HS: {hs_percent}%</Text>
          </View>

          <Image
            src={mapIcon}
            className=" w-14 h-14 rounded-full"
          />

          <Text className="text-[#7C75DB] text-sm font-semibold">
            KD:{"\n"}
            {kd.kills}/{kd.deaths}
          </Text>
        </View>
      </View>
  );
}
