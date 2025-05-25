import { View, Text } from "react-native";
import React, { useState } from "react";
import useModal from "../../../../../hooks/useModal";
import FormInput from "../../../FormInput";
import CustomButton from "../../../Button";

export default function FormCS2() {
  const { hideModal } = useModal();
  const [date, setDate] = useState("");
  const [result, setResult] = useState("");
  const [hs, setHs] = useState("");
  const [kd, setKd] = useState("");
  const [mvp, setMvp] = useState("");
  const [map, setMap] = useState("");

  return (
    <View className="flex-col justify-center items-center gap-4 mt-4">
      <FormInput title="Data dd/mm/aaaa" value={date} onChangeText={setDate} />
      <FormInput
        title="Resultado da partida"
        value={result}
        onChangeText={setResult}
      />
      <FormInput title="Mapa" value={map} onChangeText={setMap} />
      <FormInput title="K/D" value={kd} onChangeText={setKd} />
      <FormInput title="Porcentagem de HS" value={hs} onChangeText={setHs} />
      <FormInput title="MVPs" value={mvp} onChangeText={setMvp} />

      <CustomButton
        title="Fechar"
        onPress={() => {
          hideModal();
        }}
        className="bg-green-500 w-40 rounded-lg mt-10"
      />
    </View>
  );
}
