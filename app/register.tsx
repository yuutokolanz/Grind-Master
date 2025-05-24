import { View, Text, Image } from "react-native";
import React from "react";
import Header from "../components/general/Header";
import BackButton from "../components/general/BackButton";
import FormRegister from "../components/Form/FormRegister";

export default function register() {
  return (
    <View className="flex-1 items-center justify-between bg-zinc-900">
      <Header.Login></Header.Login>
      <View className="self-start justify-self-start pl-10">
        <BackButton></BackButton>
      </View>
      <View className="flex items-center justify-center gap-12">
        <Image
          className="mb-14"
          source={require("../assets/images/GrindMasterText.png")}
        ></Image>

        <FormRegister></FormRegister>
      </View>
      <Text className="self-end justify-self-end place-self-end text-cyan-800 font-semibold text-lg">
        Forje sua jornada. Rastreie seu legado.
      </Text>
    </View>
  );
}
