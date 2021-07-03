import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 16px 0px;
  padding: 0px;
`;

export const HeaderContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.heading};
  margin-right: 24px;
  line-height: 21px;
  font-size: 17px;
`;

export const PriceText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.heading};
  margin-left: 24px;
  line-height: 19px;
  font-size: 16px;
`;

export const PriceBoldText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text600};
  color: ${({ theme }) => theme.heading};
  line-height: 19px;
  font-size: 16px;
`;

export const DateText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.body};
  line-height: 16px;
  font-size: 13px;
`;

export const DateBoldText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text500};
  color: ${({ theme }) => theme.body};
  line-height: 16px;
  font-size: 13px;
`;