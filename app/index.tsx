import { View, Text, Image } from "react-native";
import React from "react";
import Header from "../components/general/Header";
import FormLogin from "../components/Form/FormLogin";

export default function index() {
  return (
    <View className="flex-1 items-center justify-start gap-y-44 bg-zinc-900">
      <Header.Login></Header.Login>

      <View className="flex items-center justify-center gap-6">
        <Image
          className="mb-14"
          source={require("../assets/images/GrindMasterText.png")}
        ></Image>
        {/* <Text className="text-4xl font-semibold">Grind Master</Text> */}

        <FormLogin></FormLogin>
      </View>

      <Text className="self-end place-self-end text-cyan-800 font-semibold text-lg">
        Forje sua jornada. Rastreie seu legado.
      </Text>
    </View>
  );
}
