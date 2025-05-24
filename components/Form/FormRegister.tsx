import { View, Text, TouchableHighlight } from "react-native";
import React from "react";
import FormInput from "./FormInput";
import CustomButton from "../general/Button";
import { router } from "expo-router";

export default function FormRegister() {
  const handleLogin = () => {
      console.log("TODO: login user!");
      console.log(username, password);
      router.push("/(auth)/home");
    };
  
    const handleRegister = () => {
      router.push("/register");
    };
  const [email, setEmail] = React.useState<string>("");
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");

  return (
    <View className="flex flex-col items-center justify-center gap-10">
      <FormInput
        title="E-mail"
        value={email}
        onChangeText={setEmail}
      ></FormInput>

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

      <FormInput
        title="Confirmar senha"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      ></FormInput>

      <CustomButton onPress={handleRegister} title="Cadastre-se"></CustomButton>
    </View>
  );
}
