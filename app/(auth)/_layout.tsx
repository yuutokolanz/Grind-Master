import React from "react";
import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Header from "../../components/general/Header";
import MyModal from "../../components/general/modal";

export default function _layout() {
  return (
    <>
      <Header.Auth></Header.Auth>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#18181b",
            borderTopColor: "transparent",
          },
          tabBarActiveTintColor: "#22d3ee",
          tabBarInactiveTintColor: "#a1a1aa",
          tabBarLabelStyle: {
            fontWeight: "600",
          },
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <AntDesign name="home" size={24} color={color} />
            ),
            headerShown: false,
          }}
        ></Tabs.Screen>

        <Tabs.Screen
          name="trains"
          options={{
            title: "Trains",
            tabBarIcon: ({ color }) => (
              <AntDesign name="book" size={24} color={color} />
            ),
            headerShown: false,
          }}
        ></Tabs.Screen>

        <Tabs.Screen
          name="profileConfig"
          options={{
            title: "Configurations",
            tabBarIcon: ({ color }) => (
              <EvilIcons name="gear" size={24} color={color} />
            ),
            headerShown: false,
          }}
        ></Tabs.Screen>
      </Tabs>
      <MyModal />
    </>
  );
}
