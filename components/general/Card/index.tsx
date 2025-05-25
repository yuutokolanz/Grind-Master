import { View } from 'react-native'
import React, { ReactNode } from 'react'
import MatchCard from './MatchCard';
import SummaryCard from './SummaryCard';
import TaskCard from './TaskCard';

interface CardProps {
  children?: ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <View className='flex items-between justify-center bg-gray-600  rounded-2xl px-4 py-3 w-80 shadow-lg mb-8'>
      {children}
    </View>
  )
}

Card.Match = MatchCard;
Card.Summary = SummaryCard;
Card.Task = TaskCard;