import { View, Text, Image } from "react-native";
import React from "react";

export type MatchCardProps = {
  matchType: "Last" | "Best";
  date: string;
  result: string;
  champion: string;
  kda: { kills: number; deaths: number; assists: number };
  highlight: string;
  championIcon: any;
};

export default function MatchCard({
  matchType,
  date,
  result,
  champion,
  kda,
  highlight,
  championIcon,
}: MatchCardProps) {
  return (
    <View>
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
              {champion}
            </Text>
            <Text className="text-[#7C75DB] text-xs mt-1">{highlight}</Text>
          </View>

          <Image
            src={championIcon}
            source={championIcon}
            className=" w-14 h-14 rounded-full"
          />

          <Text className="text-[#7C75DB] text-sm font-semibold">
            KDA{"\n"}
            {kda.kills}/{kda.deaths}/{kda.assists}
          </Text>
        </View>
      </View>
    </View>
  );
}
