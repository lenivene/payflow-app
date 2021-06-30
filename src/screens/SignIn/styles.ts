import styled from 'styled-components/native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { LinearGradient } from "expo-linear-gradient";

import bgSrc from '../../assets/bg.png';
import featuredSrc from '../../assets/woman.png';

const statusBarHeight = getStatusBarHeight();
const barFooterHeight = getBottomSpace();

export const Container = styled.View`
  background: ${({ theme }) => theme.background};
  flex: 1;
`;

export const HeaderWrapper = styled.ImageBackground.attrs({ source: bgSrc })`
  background-color: #FF941A;
  padding-top: ${statusBarHeight}px;
  padding-right: 24px;
  padding-left: 24px;
  height: 316px;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
`;

export const FeaturedImage = styled.ImageBackground.attrs({ source: featuredSrc })`
  justify-content: center;
  align-items: center;
  margin-top: 124px;
  height: 373px;
  width: 100%;
`;

export const FeaturedGradient = styled(LinearGradient)`
  margin-top: ${statusBarHeight + 26}px;
  height: 100%;
  width: 100%;
  flex: 1;
`;

export const ButtonPlusContainer = styled.View`
  position: absolute;
  left: 22%;
  bottom: -24px;
`;

export const ButtonDetailsContainer = styled.View`
  position: absolute;
  right: 21%;
  bottom: 32%;
`;

export const ContentContainer = styled.View`
  padding:24px 40px ${barFooterHeight+24}px 40px;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
  flex: 1;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.heading};
  font-family: ${({ theme }) => theme.fonts.title};
  text-align: center;
  line-height: 40px;
  padding:24px 0px;
  font-size: 32px;
`;