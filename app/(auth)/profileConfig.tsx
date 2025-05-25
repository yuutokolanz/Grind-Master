import { View, Text, Image } from "react-native";
import React from "react";
import { userData } from "../../mocks/mockUser";
import CustomButton from "../../components/general/Button";
import { router } from "expo-router";

export default function ProfileConfig() {
  const handleLogout = () => {
      console.log("TODO: Logout");
      router.replace("/");
    };
  return (
    <View className="flex-1 items-center justify-evenly gap-10 bg-zinc-900 border-t">
      <Image className="h-32 w-32 rounded-full mt-5" src={userData[0].avatar} />
      <Text className="text-center font-bold text-4xl text-[#544591]">
        {userData[0].username}
      </Text>
      <Text className="text-center font-semibold text-2xl text-[#544591]">
        {userData[0].email}
      </Text>

      <CustomButton
        title="Logout"
        onPress={handleLogout}
        className="bg-red-500 m-2 p-1 rounded-lg shadow-lg w-60 h-12 flex items-center justify-center"
      />
    </View>
  );
}
