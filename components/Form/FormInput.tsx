import { View, Text, TextInputProps, TextInput } from 'react-native'
import React from 'react'

type FormInputProps = {
  title: string;
  error?: string;
} & TextInputProps;

export default function FormInput({title, error, ...props}: FormInputProps) {
  return (
    <View className='flex justify-center items-center w-64'>
      <TextInput className='border-violet-800 border-b text-neutral-100 w-full pb-1 text-center ' placeholder={title} placeholderTextColor={'#777778'} {...props} />
      {error && <Text className=''>{error}</Text>}
    </View>
  )
}