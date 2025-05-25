import { View } from "react-native";
import React, { useState } from "react";
import useModal from "../../../../../hooks/useModal";
import FormInput from "../../../FormInput";
import CustomButton from "../../../Button";

export default function FormTFT() {
  const { hideModal } = useModal();
  const [date, setDate] = useState("");
  const [placement, setPlacement] = useState("");
  const [traits, setTraits] = useState("");
  const [augments, setAugments] = useState("");

  return (
    <View className="flex-col justify-center items-center gap-4 mt-4">
      <FormInput title="Data dd/mm/aaaa" value={date} onChangeText={setDate} />
      <FormInput
        title="Colocação"
        value={placement}
        onChangeText={setPlacement}
      />
      <FormInput
        title="Características utilizadas"
        value={traits}
        onChangeText={setTraits}
      />
      <FormInput
        title="Aprimoramentos escolhidos"
        value={augments}
        onChangeText={setAugments}
      />

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
