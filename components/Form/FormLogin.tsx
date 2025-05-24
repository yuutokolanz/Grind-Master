import { View, Text, TouchableHighlight } from "react-native";
import React from "react";
import FormInput from "./FormInput";
import CustomButton from "../general/Button";
import { router } from "expo-router";

export default function FormLogin() {
  const handleLogin = () => {
      console.log("TODO: login user!");
      console.log(username, password);
      router.push("/(auth)/home");
    };
  
    const handleRegister = () => {
      router.push("/register");
    };
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  return (
    <View className="flex flex-col items-center justify-center gap-8">
      <FormInput
        title="Username"
        value={username}
        onChangeText={setUsername}
      ></FormInput>
      <FormInput
        title="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      ></FormInput>

      <TouchableHighlight onPress={() => console.log("TODO: forgot password")}>
        <Text className="text-cyan-800 font-semibold text-lg">Esqueceu sua senha?</Text>
      </TouchableHighlight>

      <CustomButton onPress={handleLogin} title="Login"></CustomButton>
      <CustomButton onPress={handleRegister} title="Cadastre-se"></CustomButton>
    </View>
  );
}
