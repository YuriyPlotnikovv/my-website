import { styled } from 'styled-components';

export const PortfolioCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 290px;
  height: 240px;
  padding: 5px;
`;

export const PortfolioImageStyled = styled.img`
  display: block;
  width: auto;
  height: 160px;
  object-fit: cover;

  border-radius: 5px;
`;

export const PortfolioTextStyled = styled.p`
  margin: 0;
`;
