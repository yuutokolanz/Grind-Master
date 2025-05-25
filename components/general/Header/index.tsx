import { View, Image } from 'react-native'
import React, { ReactNode } from 'react'
import LoginHeader from './Login';
import AuthHeader from './Authenticated';

interface HeaderProps {
  children?: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <View>
      {children}
    </View>
  )
}

Header.Login = LoginHeader;
Header.Auth = AuthHeader;
