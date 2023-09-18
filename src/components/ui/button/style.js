import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledButton = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  padding: 15px 10px;
  box-sizing: border-box;

  &:hover,
  &:active {
    text-decoration: none;
    opacity: 0.6;
  }
`;
