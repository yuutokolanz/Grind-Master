import { View, Text, ScrollView } from "react-native";
import React from "react";
import Card from "../../components/general/Card";
import { taskData } from "../../mocks/mockTaskData";
import useGame from "../../hooks/useGame";
import ActionButton from "../../components/general/ActionButton";
import useModal from "../../hooks/useModal";
import AddTrainModal from "../../components/general/modal/AddTrainModal";

export default function Trains() {
  const { currentGameId } = useGame();

  const filteredTasks = taskData.filter((task) => task.game === currentGameId);

  const { showModal } = useModal();

  const createAddTrainModal = async () => {
    showModal(<AddTrainModal />);
  };
  return (
    <View className="flex-1 items-center justify-start bg-zinc-900">
      <ScrollView className="p-4 space-y-4">
        {filteredTasks.map((task, index) => (
          <Card key={index}>
            <Card.Task {...task} />
          </Card>
        ))}
      </ScrollView>
      <ActionButton onPress={createAddTrainModal} />
    </View>
  );
}
