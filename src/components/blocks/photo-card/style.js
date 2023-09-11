import { styled } from 'styled-components';

export const PhotoCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 170px;
`;

export const PhotoImageStyled = styled.img`
  display: block;
  height: 200px;
  width: auto;
  object-fit: cover;
  border-radius: 5px;
`;
