import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

// Types
import { BillType } from '../../@types/bill';
type Props = {
  data: BillType;
}

import {
  Container,
  HeaderContainer,
  Title,
  PriceText,
  PriceBoldText,
  DateText,
  DateBoldText,
} from './styles';

export const Bill: React.FC<Props> = ({ data }) => {
  const setFormatPice = (price: BillType['price']) => {
    return price.toLocaleString('pt-br', {
      minimumFractionDigits: 2
    });
  }

  return (
    <Container>
      <HeaderContainer>
        <Title>{data.title}</Title>
        <PriceText>
          R$&nbsp;
          <PriceBoldText>
           {setFormatPice(data.price)}
          </PriceBoldText>
        </PriceText>
      </HeaderContainer>
      <DateText>
        Vence em&nbsp;<DateBoldText>{data.date}</DateBoldText>
      </DateText>
    </Container>
  );
}

export const BillsList = styled(FlatList as new () => FlatList<BillType>)`
  margin-top: 24px;
`;