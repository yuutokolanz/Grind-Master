import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../../components/general/Header";
import Card from "../../components/general/Card";
import { matchData } from "../../mocks/mockMatchData";
import { taskData } from "../../mocks/mockTaskData";
import ActionButton from "../../components/general/ActionButton";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-start bg-zinc-900">
      <Header.Auth></Header.Auth>
      <ScrollView className="p-4 space-y-4">
        {matchData.map((match, index) => (
          <Card key={index}>
            <Card.Match {...match} />
          </Card>
        ))}
        <Card>
          <Card.Summary
            numberOfMatches={matchData.length}
            numberOfTasks={taskData.length}
            rankInfo="Você teve um leve aumento de rank"
          />
        </Card>
      </ScrollView>
      <ActionButton onPress={() => ({})}/>
    </View>
  );
}
