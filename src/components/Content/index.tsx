import React from 'react';
import { View } from 'react-native';

import {
  Container,
  HeaderContainer,
  Title,
  Details,
} from './styles';

type Props = {
  title: string;
  details: string;
}
export const Content: React.FC<Props> = ({ title, details, children }) => {
  return (
    <Container>
      <HeaderContainer>
        <Title>
          {title}
        </Title>
        <Details>
          {details}
        </Details>
      </HeaderContainer>
      <View>
        {children}
      </View>
    </Container>
  );
}