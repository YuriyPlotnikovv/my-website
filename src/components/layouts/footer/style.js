import { HandySvg } from 'handy-svg';
import styled from 'styled-components';

export const FooterStyled = styled.footer`
  color: ${(props) => props.theme.colorTextBlackTwo};

  background-color: ${(props) => props.theme.backgroundColorGrayFive};
  box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const FooterWrapperStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  max-width: 1040px;
  margin: 0 auto;
  padding: 15px 10px;
`;

export const CopyrightStyled = styled.p`
  margin: 0;
`;

export const IconsCopyStyled = styled.a`
  text-decoration: none;
`;

export const CopyIconStyled = styled(HandySvg)`
  display: block;
  box-sizing: border-box;
  width: 25px;
  height: 25px;
  margin-left: 5px;
`;
