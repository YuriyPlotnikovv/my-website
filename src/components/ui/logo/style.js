import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { HandySvg } from 'handy-svg';

export const LogoStyled = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-right: auto;

  &:hover,
  &:active {
    text-decoration: none;
    opacity: 0.6;
  }
`;

export const ImgStyled = styled(HandySvg)`
  width: 70px;
  height: 70px;
`;
