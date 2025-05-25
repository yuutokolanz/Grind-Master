import { View, Text, Modal, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import useModal from '../../../hooks/useModal';

export default function MyModal() {
  const { content, options, hideModal } = useModal();
  
  return (
    <Modal
      visible={!!content}
      transparent={true}
      animationType="none"
      onRequestClose={hideModal}
    >
      <TouchableWithoutFeedback onPress={hideModal}>
        <View className="flex-1 justify-center items-center bg-black/50 border-[#7BAFD4]">
          <TouchableWithoutFeedback>{content}</TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}