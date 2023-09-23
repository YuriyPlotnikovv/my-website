import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledButton = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  padding: 15px 10px;
  box-sizing: border-box;
  font-family: 'ProximaNova-Bold';

  &:hover,
  &:active {
    text-decoration: none;
    opacity: 0.6;
  }
`;
