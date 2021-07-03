import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 24px 24px 0px 24px;
  margin-top: 8px;
  flex: 1;
`;

export const HeaderContainer = styled.View`
  border-bottom-color: ${({ theme }) => theme.stroke};
  justify-content: space-between;
  border-bottom-width: 1px;
  padding-bottom: 24px;
  flex-direction: row;
  width: 100%;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title};
  color: ${({ theme }) => theme.heading};
  font-size: 20px;
`;

export const Details = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.body};
  font-size: 13px;
`;