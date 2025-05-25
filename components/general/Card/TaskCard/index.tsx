import { View, Text } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Games } from "../../../../constants/enums";

export type TaskCardProps = {
  game: Games;
  taskTitle: string;
  taskDescription: string;
  reapeatable: boolean;
  complete: boolean;
};

export default function TaskCard({
  taskTitle,
  taskDescription,
  reapeatable = false,
  complete = false,
}: TaskCardProps) {
  return (
    <View className={`relative w-72 px-4 py-3 rounded-2xl shadow-lg ${complete ? "bg-slate-400" : "bg-gray-600"}`}>
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-[#7CDBD6] text-2xl font-bold">{taskTitle}</Text>
        {reapeatable && (
          <MaterialCommunityIcons name="repeat" size={20} color="#7C75DB" />
        )}
      </View>

      <Text className="text-[#7C75DB] text-lg">{taskDescription}</Text>

      {complete && (
        <View className="absolute bottom-2 right-2">
          <MaterialCommunityIcons name="check-circle" size={24} color="green" />
        </View>
      )}
    </View>
  );
}
