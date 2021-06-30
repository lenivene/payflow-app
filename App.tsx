import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from "expo-font";
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { Lexend_600SemiBold } from "@expo-google-fonts/lexend";
import { Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';

// Config
import { themeConfig } from './src/config/theme';
import { SignIn } from './src/screens/SignIn';

export default function App() {
  const [fontsLoaded] = useFonts({
    Lexend_600SemiBold,
    Inter_400Regular,
    Inter_600SemiBold
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={themeConfig}>
      <StatusBar
        translucent
        style='light'
        backgroundColor='transparent'
      />
      <SignIn />
    </ThemeProvider>
  );
}