import { styled } from 'styled-components';

export const PhotoStyled = styled.section`
  display: block;

  background-color: ${(props) => props.$background};
  box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const PhotoWrapperStyled = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  padding: 30px 0;
`;

export const PhotoListStyled = styled.ul`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px 10px;
  margin: 0;
  padding: 0;
`;

export const PhotoItemStyled = styled.li`
  padding: 0;

  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
  list-style-type: none;

  ${(props) =>
    props.$href
      ? `&:hover {
    box-shadow: 0 4px 8px 0px rgba(0, 0, 0, 0.1);
  }`
      : ''}
`;
