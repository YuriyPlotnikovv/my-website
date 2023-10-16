import { HandySvg } from 'handy-svg';
import { styled } from 'styled-components';

export const LinksListStyled = styled.ul`
  ${(props) =>
    props.$grid
      ? 'display: grid; grid-template-columns: repeat(2, auto); gap: 10px 200px;'
      : 'display: flex; gap: 10px;'}
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

export const LinksItemStyled = styled.li`
  list-style-type: none;
`;

export const HandySvgStyled = styled(HandySvg)`
  box-sizing: border-box;
  width: ${(props) => props.$size};
  height: ${(props) => props.$size};
  ${(props) => (props.$grid ? 'margin-right: 30px;' : '')}

  fill: ${(props) => props.$color};
  stroke: ${(props) => props.$color};
`;
