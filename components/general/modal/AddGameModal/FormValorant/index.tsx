import { View, Text } from 'react-native'
import React, { useState } from 'react'
import useModal from '../../../../../hooks/useModal';
import FormInput from '../../../FormInput';
import CustomButton from '../../../Button';

export default function FormValorant() {
  const { hideModal } = useModal();
  const [date, setDate] = useState("");
  const [result, setResult] = useState("");
  const [agent, setAgent] = useState("");
  const [kd, setKd] = useState("");
  const [acs, setAcs] = useState("");
  const [map, setMap] = useState("");

  return (
    <View className="flex-col justify-center items-center gap-4 mt-4">
      <FormInput title="Data dd/mm/aaaa" value={date} onChangeText={setDate} />
      <FormInput
        title="Resultado da partida"
        value={result}
        onChangeText={setResult}
      />
      <FormInput
        title="Agente Usado"
        value={agent}
        onChangeText={setAgent}
      />
      <FormInput title="K/D" value={kd} onChangeText={setKd} />
      <FormInput
        title="ACS"
        value={acs}
        onChangeText={setAcs}
      />
      <FormInput
        title="Mapa"
        value={map}
        onChangeText={setMap}
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