import { styled } from 'styled-components';

export const MailStyled = styled.section`
  display: block;

  background-color: ${(props) => props.theme.backgroundColorGray};
  box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const MailWrapperStyled = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  padding: 30px 0 70px 0;
`;

export const MailHeadingWrapperStyled = styled.div`
  position: relative;

  width: max-content;
  margin: 0 auto;

  color: #757575;

  &::before {
    position: absolute;
    top: calc(50% - 1px);
    left: -320px;
    z-index: 0;

    width: 300px;
    height: 1px;

    background-color: ${(props) => props.theme.backgroundColorGrayTwo};

    content: '';
  }
  &::after {
    position: absolute;
    top: calc(50% - 1px);
    right: -320px;
    z-index: 0;

    width: 300px;
    height: 1px;

    background-color: ${(props) => props.theme.backgroundColorGrayTwo};

    content: '';
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
