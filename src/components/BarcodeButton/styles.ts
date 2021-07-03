import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.secondary};
  align-content: center;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  padding: 20px 20px;
  margin: 0px 20px;
  height: 80px;
`;

export const ButtonContainer = styled(RectButton)``;

export const IconButton = styled.Image`
  height: 35px;
  width: 56px;
`;

export const Line = styled.View`
  background-color: ${({ theme }) => theme.background};
  margin:0px 24px;
  opacity: 0.32;
  height: 100%;
  width: 1px;
`;

export const DetailsText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.background};
  line-height: 20px;
  padding: 3px 3px;
  font-size: 13px;
`;

export const DetailsBoldText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text700};
  color: ${({ theme }) => theme.background};
  line-height: 20px;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 13px;
`;