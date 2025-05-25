import { View, ScrollView } from "react-native";
import React from "react";
import Card from "../../components/general/Card";
import { matchData } from "../../mocks/mockMatchData";
import { taskData } from "../../mocks/mockTaskData";
import ActionButton from "../../components/general/ActionButton";
import useGame from "../../hooks/useGame";
import MatchCard from "../../components/general/Card/MatchCard";
import useModal from "../../hooks/useModal";
import AddGameModal from "../../components/general/modal/AddGameModal";

export default function Home() {
  const { currentGameId } = useGame();
  const matches = matchData[currentGameId] || [];
  const tasks = taskData.filter((task) => task.game === currentGameId);
  const { showModal } = useModal();

  const createAddGameModal = async () => {
    showModal(<AddGameModal />);
  };
  
  return (
    <View className="flex-1 items-center justify-start bg-zinc-900">
      <ScrollView className="p-4 space-y-4">
        {matches.map((match, index) => (
          <Card key={index}>
            <MatchCard key={index} {...match} />
          </Card>
        ))}
        <Card>
          <Card.Summary
            numberOfMatches={matches.length}
            numberOfTasks={tasks.length}
            rankInfo="Você teve um leve aumento de rank"
          />
        </Card>
      </ScrollView>
      <ActionButton onPress={createAddGameModal} />
    </View>
  );
}
