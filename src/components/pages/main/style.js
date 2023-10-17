import { styled } from 'styled-components';

export const MainStyled = styled.main`
  display: flex;
  flex-direction: column;

  color: ${(props) => props.theme.colorTextBlack};
`;
