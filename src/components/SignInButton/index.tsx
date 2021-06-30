import React from 'react';
import { TouchableOpacityProps } from 'react-native';

// Components
import {
  Container,
  IconImage,
  IconWrapper,
  TextButton
} from './styles';

// Assets
import iconSrc from '../../assets/googleIcon.png';

export const SignInButton: React.FC<TouchableOpacityProps> = ({ children, ...rest }:any) => {
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