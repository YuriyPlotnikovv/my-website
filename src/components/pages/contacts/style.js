import { styled } from 'styled-components';

export const ContactsStyled = styled.main`
  display: flex;
  flex-direction: column;

  color: ${(props) => props.theme.colorTextBlack};
`;

export const ContactsSectionStyled = styled.section`
  display: block;

  background-color: ${(props) => props.theme.backgroundColorGray};
  box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const ContactsWrapperStyled = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  padding: 30px 0;
`;
