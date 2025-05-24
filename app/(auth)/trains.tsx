import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../../components/general/Header";
import Card from "../../components/general/Card";
import { taskData } from "../../mocks/mockTaskData";

export default function Trains() {
  return (
    <View className="flex-1 items-center justify-start bg-zinc-900">
      <Header.Auth></Header.Auth>
      <ScrollView className="p-4 space-y-4">
        {taskData.map((task, index) => (
          <Card key={index}>
            <Card.Task {...task} />
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}
