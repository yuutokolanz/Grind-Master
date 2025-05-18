import { View, Text, TouchableHighlightProps, TouchableHighlight, Touchable, TouchableOpacityProps, TouchableOpacity } from 'react-native'
import React from 'react'

type CustomButtonProps = {
  title: string;
  onPress: () => void;
} & TouchableOpacityProps;

export default function CustomButton({title, onPress, ...props}: CustomButtonProps) {
  return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        className="bg-indigo-900 m-2 p-1 rounded-lg shadow-lg w-60 h-12 flex items-center justify-center"
        {...props}
      >
        <Text className="text-white text-center text-2xl font-semibold">
          {title}
        </Text>
      </TouchableOpacity>
  )
}