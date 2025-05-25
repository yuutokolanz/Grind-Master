import { View, Text } from "react-native";
import React, { useState } from "react";
import FormInput from "../../../FormInput";
import useModal from "../../../../../hooks/useModal";
import CustomButton from "../../../Button";

export default function FormLoL() {
  const { hideModal } = useModal();
  const [date, setDate] = useState("");
  const [result, setResult] = useState("");
  const [champion, setChampion] = useState("");
  const [kda, setKda] = useState("");
  const [highlight, setHighlight] = useState("");

  return (
    <View className="flex-col justify-center items-center gap-4 mt-4">
      <FormInput title="Data dd/mm/aaaa" value={date} onChangeText={setDate} />
      <FormInput
        title="Resultado da partida"
        value={result}
        onChangeText={setResult}
      />
      <FormInput
        title="Campeão jogado"
        value={champion}
        onChangeText={setChampion}
      />
      <FormInput title="K/D/A" value={kda} onChangeText={setKda} />
      <FormInput
        title="Desempenho na partida: 2°"
        value={highlight}
        onChangeText={setHighlight}
      />

      <CustomButton
        title="Fechar"
        onPress={() => {
          hideModal();
          console.log(date, result, champion, kda, highlight);
        }}
        className="bg-green-500 w-40 rounded-lg mt-10"
      />
    </View>
  );
}
