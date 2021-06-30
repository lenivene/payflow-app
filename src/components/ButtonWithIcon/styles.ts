import styled from 'styled-components/native';

export type ContainerProps = { isColorPrimary?: boolean; }
export const Container = styled.View<ContainerProps>`
  background-color: ${(props) => props.isColorPrimary ?
    props.theme.primary : props.theme.secondary};
  border-radius: 5px;
  padding: 12px;
`;
