import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from "expo-font";
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold
} from '@expo-google-fonts/inter';
import { Lexend_400Regular, Lexend_600SemiBold } from "@expo-google-fonts/lexend";

// Config
import { themeConfig } from './src/config/theme';

import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Lexend_400Regular,
    Lexend_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold
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
      <Routes />
    </ThemeProvider>
  );
}