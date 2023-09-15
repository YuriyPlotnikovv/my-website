import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLogo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  &:hover,
  &:active {
    text-decoration: none;
    opacity: 0.6;
  }

  & .logo {
    width: 70px;
    height: 70px;
  }
`;

export const StyledImg = styled.img`
  width: auto;
  height: 70px;
`;
