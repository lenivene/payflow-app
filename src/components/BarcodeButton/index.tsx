import React from 'react';
import { View, ViewProps } from 'react-native';

// Assets
import barcodeSrc from "../../assets/barcodeWhiteIcon.png";

// Components
import {
  Container,
  ButtonContainer,
  IconButton,
  Line,
  DetailsText,
  DetailsBoldText,
} from './styles';

export const BarcodeButton: React.FC<ViewProps> = ({...rest}) => {
  return (
    <Container {...rest as View}>
      <ButtonContainer>
        <IconButton source={barcodeSrc} />
      </ButtonContainer>
      <Line />
      <View>
        <DetailsText>
          Você tem
          <DetailsBoldText>&nbsp;14 boletos</DetailsBoldText>
        </DetailsText>
        <DetailsText>cadastrados para pagar</DetailsText>
      </View>
    </Container>
  );
}