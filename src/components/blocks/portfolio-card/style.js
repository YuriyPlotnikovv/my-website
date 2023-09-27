import { styled } from 'styled-components';

export const PortfolioCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 10px;
  width: 290px;
  height: 240px;
`;

export const PortfolioImageStyled = styled.img`
  display: block;
  height: 160px;
  width: auto;
  object-fit: cover;
  border-radius: 5px;
`;

export const PortfolioTextStyled = styled.p`
  margin: 0;
`;
