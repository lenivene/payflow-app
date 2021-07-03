import React from 'react';

// Routes
import { HomePageRoutes } from '../../../routes/homePages.routes';

// Hooks
import { useBarcode } from '../../../hooks/barcode';

// Components
import {
  Container,
  HeaderWrapper,
  HeaderContainer,
  HiText,
  ProfileContainer,
  NameText,
  WelcomeContainer,
  MessageText,
  Avatar,
} from './styles';
import { BarcodeButton } from '../../../components/BarcodeButton';

export const PageContainer: React.FC = () => {
  const { isVisible } = useBarcode();

  return (
    <Container>
      <HeaderWrapper
        style={!isVisible ? { height: 132} : {}}
        resizeMode={!isVisible ? 'center' : undefined}
      >
        <HeaderContainer>
          <ProfileContainer>
            <WelcomeContainer>
              <HiText>Oi,</HiText>
              <NameText>Lenivene</NameText>
            </WelcomeContainer>

            <MessageText>
              Mantenha suas contas em dia
            </MessageText>
          </ProfileContainer>
          <Avatar
            source={{
              uri: 'https://github.com/lenivene.png'
            }}
          />
        </HeaderContainer>
      </HeaderWrapper>
      {isVisible && (
        <BarcodeButton style={{ marginTop: -40 }} />
      )}
      <HomePageRoutes />
    </Container>
  );
}