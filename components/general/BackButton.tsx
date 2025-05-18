import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

export default function BackButton() {
  const handleBack = () => {
    router.back();
  };

  return (
    <TouchableHighlight onPress={handleBack}>
      <Ionicons name="arrow-back-outline" size={24} color="white" />
    </TouchableHighlight>
  )
}