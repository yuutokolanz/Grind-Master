import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import useGame from "../../../../hooks/useGame";
import useModal from "../../../../hooks/useModal";
import Ionicons from "@expo/vector-icons/Ionicons";
import FormInput from "../../FormInput";
import CustomButton from "../../Button";
import Checkbox from "expo-checkbox";

export default function AddTrainModal() {
  const { currentGameId } = useGame();
  const { hideModal } = useModal();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isChecked, setChecked] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={hideModal}>
      <TouchableWithoutFeedback>
        <View className="flex-col items-center justify-evenly bg-zinc-900 w-4/5 h-1/3 rounded-lg border-2 border-[#7BAFD4]">
          <TouchableOpacity onPress={hideModal} className="self-end mr-2">
            <Ionicons name="close" size={24} color="#7BAFD4" />
          </TouchableOpacity>
          <Text className="text-center font-bold text-lg text-[#544591]">
            Criar Treino - {currentGameId}
          </Text>

          <FormInput
            title="Título do Treino"
            value={title}
            onChangeText={setTitle}
          />
          <FormInput
            title="Descrição do Treino"
            value={description}
            onChangeText={setDescription}
          />

          <View className="flex-row gap-2 mt-2">
            <Checkbox value={isChecked} onValueChange={setChecked} />
            <Text className="text-[#777778] font-semibold">Repetível</Text>
          </View>

          <CustomButton
            title="Fechar"
            onPress={() => {
              hideModal();
            }}
            className="bg-green-500 w-40 rounded-lg mt-10"
          />
        </View>
      </TouchableWithoutFeedback>
    </TouchableWithoutFeedback>
  );
}
