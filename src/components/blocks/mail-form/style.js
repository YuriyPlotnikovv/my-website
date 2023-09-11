import { styled } from 'styled-components';

export const MailStyled = styled.section`
  display: block;
  background-color: #fafafa;
  box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const MailWrapperStyled = styled.div`
  padding: 30px 0 70px 0;
  margin: 0 auto;
  max-width: 1040px;
`;

export const MailHeadingWrapperStyled = styled.div`
  margin: 0 auto;
  width: max-content;
  position: relative;
  color: #757575;

  &::before {
    content: '';
    position: absolute;
    left: -320px;
    top: calc(50% - 1px);
    width: 300px;
    height: 1px;
    background-color: #ddd;
    z-index: 0;
  }
  &::after {
    content: '';
    position: absolute;
    right: -320px;
    top: calc(50% - 1px);
    width: 300px;
    height: 1px;
    background-color: #ddd;
    z-index: 0;
  }
`;

export const MailFieldsWrapperStyled = styled.form`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(3, auto);
  gap: 20px;
  padding: 30px 0 0 0;
`;

export const MailInputStyled = styled.input`
  grid-column: ${(props) => props.$column};
  grid-row: ${(props) => props.$row};
`;
