import { HandySvg } from 'handy-svg';
import { styled } from 'styled-components';

export const StyledLinksList = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  gap: 10px;
`;

export const StyledLinksItem = styled.li`
  list-style-type: none;
`;

export const HandySvgStyled = styled(HandySvg)`
  height: ${(props) => props.$size};
  width: ${(props) => props.$size};
  box-sizing: border-box;
  fill: ${(props) => props.$color};
  stroke: ${(props) => props.$color};
`;
