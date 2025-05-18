import React from "react";
import { Tabs } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: () => (
            <AntDesign name="home" size={24} color="black" />
          ),
          headerShown: false,
        }}
      ></Tabs.Screen>
      
      <Tabs.Screen
        name="trains"
        options={{
          title: "Trains",
          tabBarIcon: () => (
            <AntDesign name="book" size={24} color="black" />
          ),
          headerShown: false,
        }}
      ></Tabs.Screen>

      <Tabs.Screen
        name="profileConfig"
        options={{
          title: "Configurations",
          tabBarIcon: () => (
            <EvilIcons name="gear" size={24} color="black" />
          ),
          headerShown: false,
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}
