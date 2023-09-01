import { styled } from 'styled-components';

export const StyledPortfolioCard = styled.article`
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 10px;
  width: 290px;
  height: 240px;
`;

export const StyledPortfolioImage = styled.img`
  display: block;
  height: 160px;
  width: auto;
  object-fit: cover;
`;

export const StyledPortfolioText = styled.p`
  margin: 0;
`;
