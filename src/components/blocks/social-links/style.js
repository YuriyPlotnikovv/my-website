import { HandySvg } from 'handy-svg';
import { styled } from 'styled-components';

export const StyledLinksList = styled.ul`
  ${(props) =>
    props.$grid
      ? 'display: grid; grid-template-columns: repeat(2, auto); gap: 10px 200px;'
      : 'display: flex; gap: 10px;'}
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
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
  ${(props) => (props.$grid ? 'margin-right: 30px;' : '')}
`;
