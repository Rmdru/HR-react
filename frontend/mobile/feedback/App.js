import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Header } from "./components/Partials/Header"

export default function App() {
  return (
    <NavigationContainer>
      <Header />
    </NavigationContainer>
  );
}