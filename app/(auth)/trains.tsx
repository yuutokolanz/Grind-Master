import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../../components/general/Header";
import Card from "../../components/general/Card";
import { taskData } from "../../mocks/mockTaskData";
import useGame from "../../hooks/useGame";

export default function Trains() {
  const { currentGameId } = useGame();

  const filteredTasks = taskData.filter((task) => task.game === currentGameId);
  return (
    <View className="flex-1 items-center justify-start bg-zinc-900">
      <ScrollView className="p-4 space-y-4">
        {filteredTasks.map((task, index) => (
          <Card key={index}>
            <Card.Task {...task} />
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}
