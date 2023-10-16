import { styled } from 'styled-components';

export const NavigationStyled = styled.nav`
  align-items: center;

  font-family: ProximaNova-Light;
  font-size: ${(props) => (props.$size ? '24px' : '')};
`;

export const NavListStyled = styled.ul`
  display: flex;
  gap: 10px;
  margin: 0;
  padding: 0;
`;

export const NavItemStyled = styled.li`
  list-style-type: none;
`;
