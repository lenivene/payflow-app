import styled from 'styled-components/native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';

// Types
import { BillType } from '../../../@types/bill';

// Assets
import bgSrc from '../../../assets/bg.png';

// Constants
const statusBarHeight = getStatusBarHeight();
const barFooterHeight = getBottomSpace();

export const Container = styled.View`
  background: ${({ theme }) => theme.background};
  padding-bottom: ${barFooterHeight}px;
  flex: 1;
`;

export const HeaderWrapper = styled.ImageBackground.attrs({ source: bgSrc })`
  padding-top: ${statusBarHeight}px;
  background-color: #FF941A;
  padding-right: 24px;
  padding-left: 24px;
  height: 184px;
  width: 100%;
`;

export const HeaderContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-top: 19px;
`;

export const ProfileContainer = styled.View`
  justify-content: space-between;
  flex: 1;
`;

export const WelcomeContainer = styled.View`
  flex-direction: row;
`;

export const HiText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title400};
  color: ${({ theme }) => theme.background};
  line-height: 25px;
  margin-right: 4px;
  font-size: 20px;
`;

export const NameText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.background};
  line-height: 25px;
  font-size: 20px;
`;

export const MessageText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.background};
  font-size: 13px;
`;

export const Avatar = styled.Image`
  border-radius: 5px;
  height: 48px;
  width: 48px;
`;