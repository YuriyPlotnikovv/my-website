import styled from 'styled-components';

export const HeaderStyled = styled.header`
  color: ${(props) => props.theme.colorTextWhite};

  background-color: ${(props) => props.theme.backgroundColorBlack};
`;

export const HeaderWrapperStyled = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  max-width: 1040px;
  margin: 0 auto;
  padding: 15px 10px;
`;
