import styled from 'styled-components';
import { TitleSize } from './title';

export const TitleStyled = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 700;
  line-height: 1.2em;

  font-size: ${(props) => {
    let fontSize = '36px';
    if (props.$size === TitleSize.EXTRABIG) {
      fontSize = '102px';
    }
    if (props.$size === TitleSize.BIG) {
      fontSize = '44px';
    }
    if (props.$size === TitleSize.SMALL) {
      fontSize = '24px';
    }
    if (props.$size === TitleSize.EXTRA_SMALL) {
      fontSize = '18px';
    }
    return fontSize;
  }};
`;
