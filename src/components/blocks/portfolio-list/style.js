import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const PortfolioStyled = styled.section`
  display: block;

  background-color: #fafafa;
  box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const PortfolioWrapperStyled = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  padding: 30px 0 70px 0;
`;

export const PortfolioListStyled = styled.ul`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px 0;
  margin: 30px 0 0;
  padding: 0;
`;

export const PortfolioItemStyled = styled.li`
  padding: 0;

  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
  list-style-type: none;

  &:hover {
    box-shadow: 0 4px 8px 0px rgba(0, 0, 0, 0.1);
  }
`;

export const PortfolioLinkStyled = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
