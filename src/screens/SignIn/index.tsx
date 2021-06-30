import React from 'react';
import { Image } from 'react-native';
import { useTheme } from 'styled-components/native';

// Assets
import addBoxLineIconSrc from "../../assets/addBoxLineIcon.png";
import fileList2LineIconSrc from "../../assets/fileList2LineIcon.png";
import barcodeIconSrc from "../../assets/barcodeIcon.png";

// Components
import {
  Container,
  FeaturedGradient,
  FeaturedImage,
  HeaderWrapper,
  ButtonPlusContainer,
  ButtonDetailsContainer,
  ContentContainer,
  Title,
} from './styles';
import { ButtonWithIcon } from '../../components/ButtonWithIcon';
import { SignInButton } from '../../components/SignInButton';

export const SignIn: React.FC = () => {
  const { background } = useTheme();

  return (
    <Container>
      <HeaderWrapper>
        <FeaturedImage resizeMode='contain'>
          <FeaturedGradient
            colors={[`${background}00`, background]}
            start={{x: 0, y: .65}}
            end={{x: 0, y: 1}}
          />
        </FeaturedImage>
        <ButtonPlusContainer>
          <ButtonWithIcon
            isColorPrimary={false}
          >
            <Image source={addBoxLineIconSrc} />
          </ButtonWithIcon>
        </ButtonPlusContainer>

        <ButtonDetailsContainer>
          <ButtonWithIcon
            isColorPrimary={false}
          >
            <Image source={fileList2LineIconSrc} />
          </ButtonWithIcon>
        </ButtonDetailsContainer>
      </HeaderWrapper>
      <ContentContainer>
        <Image source={barcodeIconSrc} />

        <Title>
          Organize seus{`\n`}
          boletos em um{`\n`}
          só lugar
        </Title>
        <SignInButton>
          Entrar com Google
        </SignInButton>
      </ContentContainer>
    </Container>
  );
}