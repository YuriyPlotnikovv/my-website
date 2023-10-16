import { styled } from 'styled-components';

export const PhotoCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.$width ? props.$width : 'auto')};
  padding: 5px;
`;

export const PhotoImageStyled = styled.img`
  display: block;
  width: auto;
  height: 250px;
  object-fit: cover;

  border-radius: 5px;
`;
