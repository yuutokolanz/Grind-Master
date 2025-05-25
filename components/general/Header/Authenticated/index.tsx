import { View, Text, Image } from "react-native";
import React from "react";
import { userData } from "../../../../mocks/mockUser";
import GameChangeButton from "../GameChangeButton";
import CustomButton from "../../Button";
import useModal from "../../../../hooks/useModal";
import useGame from "../../../../hooks/useGame";
import { Games, gameList } from "../../../../constants/enums";
import GameIcon from "../GameIcon";

export type UserProps = {
  email: string;
  username: string;
  password: string;
  avatar: string;
};

export default function AuthHeader() {
  const { showModal, hideModal } = useModal();
  const { setGameId } = useGame();
  
  const createGameModal = async () => {
    showModal(
      <View className="flex-col items-center justify-evenly bg-zinc-900 w-4/5 h-1/2 rounded-lg border-2 border-[#7BAFD4]">
        
        <View className="flex-col justify-center items-center gap-5">
          {gameList.map((game) => (
            <GameIcon
              key={game}
              gameName={game}
              onPress={() => {
                console.log(game);
                setGameId(game as Games);
                hideModal();
              }}
            />
          ))}
        </View>

        <CustomButton
          title="Fechar"
          onPress={() => {
            hideModal();
          }}
          className="bg-red-500 w-1/2 rounded-lg"
        />
      </View>
    );
  };

  return (
    <View className="flex-row w-full items-center justify-between bg-zinc-900 p-3">
      <Image
        className="h-16 w-16"
        source={require("../../../../assets/images/LogoGrindMaster.png")}
      />

      <View className="flex-col items-center w-80 gap-1">
        <GameChangeButton onPress={createGameModal} />

        <Text className="text-center font-bold text-base text-[#544591]">
          Bem-vindo ao seu campo de treino, {userData[0].username}
        </Text>
      </View>

      <Image className="h-16 w-16 rounded-full" src={userData[0].avatar} />
    </View>
  );
}
