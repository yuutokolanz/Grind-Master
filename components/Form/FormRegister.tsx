import { View, Text, TouchableHighlight } from "react-native";
import React, { useState } from "react";
import FormInput from "../general/FormInput";
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
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
