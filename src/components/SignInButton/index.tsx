import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

// Components
import {
  Container,
  IconImage,
  IconWrapper,
  TextButton
} from './styles';

// Assets
import iconSrc from '../../assets/googleIcon.png';

export const SignInButton: React.FC<RectButtonProps> = ({ children, ...rest }:any) => {
  return (
    <Container {...rest}>
      <IconWrapper>
        <IconImage
          source={iconSrc}
        />
      </IconWrapper>
      <TextButton>
        {children}
      </TextButton>
    </Container>
  );
}