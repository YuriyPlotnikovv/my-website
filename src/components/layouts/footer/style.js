import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: #f5f5f5;
  color: #333;
  box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const StyledFooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 10px;
`;

export const StyledCopyright = styled.p`
  margin: 0;
`;

export const StyledIconsCopy = styled.a`
  text-decoration: none;
`;

export const StyledCopyIcon = styled.img`
  display: block;
  width: 25px;
  height: auto;
  box-sizing: border-box;
  margin-left: 5px;
`;
