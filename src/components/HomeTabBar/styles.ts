import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { LinearGradient } from 'expo-linear-gradient';

const barFooterHeight = getBottomSpace();

export const Container = styled.View`
  background-color: transparent;
  margin-bottom: ${barFooterHeight+5}px;
  flex-direction: row;
  justify-content: space-around;
`;

type ContainerIconProps = { name: string };
export const ContainerIcon = styled(RectButton)<ContainerIconProps>`
  background-color: ${props => props.name == 'addMore' ? props.theme.primary : 'transparent'};
  align-content: center;
  align-items: center;
  padding: 16px 16px;
  border-radius: 5px;
  overflow: hidden;
`;

export const Icon = styled.Image`
  height: 24px;
  width: 24px;
`;

export const GradientBar = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [theme.background, `${theme.background}00`]
}))`
  position: absolute;
  height: 50px;
  bottom: 56px;
  width: 100%;
`;