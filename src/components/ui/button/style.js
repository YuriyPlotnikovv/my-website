import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const ButtonStyled = styled(Link)`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: ${(props) => (props.$padding ? '' : '5px')};

  text-decoration: none;
  color: inherit;

  &:hover,
  &:active {
    text-decoration: none;

    opacity: 0.6;
  }
`;
