import { DefaultTheme } from "styled-components/native"

declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    secondary: string;

    background: string;

    heading: string;
    body: string;

    inputs: string;
    text: string;
    stroke: string;
    boxes: string;

    fonts: {
      title: string;
      title400: string;
      label: string;
      text: string;
      text500: string;
      text600: string;
      text700: string;
    }
  }
}

export const themeConfig: DefaultTheme = {
  primary: '#FF941A',
  secondary: '#585666',

  background: '#ffffff',

  heading: '#585666',
  body: '#706E7A',

  inputs: '#B1B0B8',
  text: '#666666',
  stroke: '#E3E3E5',
  boxes: '#FAFAFC',

  fonts: {
    title: 'Lexend_600SemiBold',
    title400: 'Lexend_400Regular',
    label: 'Lexend_600SemiBold',
    text: 'Inter_400Regular',
    text500: 'Inter_500Medium',
    text600: 'Inter_600SemiBold',
    text700: 'Inter_700Bold'
  }
}