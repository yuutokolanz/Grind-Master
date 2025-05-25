import { View, Text } from "react-native";
import React from "react";

type SummaryCardProps = {
  numberOfMatches: number;
  numberOfTasks: number;
  rankInfo: string;
};

export default function SummaryCard({
  numberOfMatches,
  numberOfTasks,
  rankInfo,
}: SummaryCardProps) {
  return (
    <View>
      <Text className="text-center text-[#7C75DB] text-2xl font-semibold mb-2">
        Nesta Semana
      </Text>

      <View className="gap-y-1">
        <Text className="text-[#7CDBD6] text-lg font-semibold">
          {numberOfMatches} Partidas Jogadas
        </Text>
        <Text className="text-[#7CDBD6] text-lg font-semibold">
          {numberOfTasks} Treinos Concluídos
        </Text>
        <Text className="text-[#7C75DB] text-base italic">{rankInfo}</Text>
      </View>
    </View>
  );
}
