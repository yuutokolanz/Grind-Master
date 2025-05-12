import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { router } from "expo-router";

export default function index() {
  const handleLogin = () => {
    console.log("TODO: login user!");
    router.push("/(auth)/home");
  };

  const handleRegister = () => {
    router.push("/register");
  };

  return (
    <View>
      <Text className="text-4xl font-semibold" >Login</Text>

      <Button
      title="Login"
      onPress={handleLogin} />

      <Button
      title="Register"
      onPress={handleRegister} />
    </View>
  );
}
