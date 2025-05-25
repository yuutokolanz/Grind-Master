import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import React from "react";
import useGame from "../../../../hooks/useGame";
import Ionicons from "@expo/vector-icons/Ionicons";
import useModal from "../../../../hooks/useModal";
import { Games } from "../../../../constants/enums";
import FormLoL from "./FormLoL";
import FormValorant from "./FormValorant";
import FormCS2 from "./FormCS2";
import FormTFT from "./FormTFT";

export default function AddGameModal() {
  const { currentGameId } = useGame();
  const { hideModal } = useModal();
  const renderGameForm = () => {
    switch (currentGameId) {
      case Games.LeagueOfLegends:
        return <FormLoL />;
      case Games.Valorant:
        return <FormValorant />;
      case Games.CS2:
        return <FormCS2 />;
      case Games.TeamFightTactics:
        return <FormTFT />;
      default:
        return <Text className="text-white">Jogo não suportado.</Text>;
    }
  };

  return (
    <TouchableWithoutFeedback onPress={hideModal}>
      <TouchableWithoutFeedback>
        <View className="flex-col items-center justify-start bg-zinc-900 w-4/5 h-1/2 rounded-lg border-2 border-[#7BAFD4]">
          <TouchableOpacity onPress={hideModal} className="self-end mt-2 mr-2">
            <Ionicons name="close" size={24} color="#7BAFD4" />
          </TouchableOpacity>
          <Text className="text-center font-bold text-lg text-[#544591]">
            Adicionar Partida - {currentGameId}
          </Text>

          {renderGameForm()}
        </View>
      </TouchableWithoutFeedback>
    </TouchableWithoutFeedback>
  );
}
