import { styled } from 'styled-components';

export const StyledNavigation = styled.nav`
  align-items: center;
  font-family: ProximaNova-Light;
  font-size: ${(props) => (props.$size ? '24px' : '')};
`;

export const StyledNavList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  gap: 10px;
`;

export const StyledNavItem = styled.li`
  list-style-type: none;
`;
