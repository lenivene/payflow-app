import React from 'react';

import { Container, ContainerProps } from './styles';

type Props = ContainerProps;
export const ButtonWithIcon: React.FC<Props> = ({
  isColorPrimary = true,
  children,
  ...rest
}) => {
  return (
    <Container
      isColorPrimary={isColorPrimary}
      {...rest}
    >
      {children}
    </Container>
  );
}