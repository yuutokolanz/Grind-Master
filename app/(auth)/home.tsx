import { View, ScrollView } from "react-native";
import React from "react";
import Header from "../../components/general/Header";
import Card from "../../components/general/Card";
import { matchData } from "../../mocks/mockMatchData";
import { taskData } from "../../mocks/mockTaskData";
import ActionButton from "../../components/general/ActionButton";
import useGame from "../../hooks/useGame";
import MatchCard from "../../components/general/Card/MatchCard";

export default function Home() {
  const { currentGameId } = useGame();
  const matches = matchData[currentGameId] || [];

  return (
    <View className="flex-1 items-center justify-start bg-zinc-900">
      <Header.Auth></Header.Auth>
      <ScrollView className="p-4 space-y-4">
        {matches.map((match, index) => (
          <Card>
            <MatchCard key={index} {...match} />
          </Card>
        ))}
        <Card>
          <Card.Summary
            numberOfMatches={matches.length}
            numberOfTasks={taskData.length}
            rankInfo="Você teve um leve aumento de rank"
          />
        </Card>
      </ScrollView>
      <ActionButton onPress={() => ({})} />
    </View>
  );
}
