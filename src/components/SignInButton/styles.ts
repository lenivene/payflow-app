import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  background-color: ${({ theme }) => theme.boxes};
  border-color: ${({ theme }) => theme.stroke};
  border-radius: 8px;
  border-width: 1px;
  height: 56px;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const IconWrapper = styled.View`
  border-right-color : ${({ theme }) => theme.stroke};
  border-right-width: 1px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 56px;
  width: 56px;
`;

export const IconImage = styled.Image`
  width: 24px;
  height: 25px;
`;

export const TextButton = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.text};
  text-align: center;
  font-size: 15px;
  flex: 1;
`;