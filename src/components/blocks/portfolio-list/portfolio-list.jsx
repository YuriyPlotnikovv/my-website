import { PortfolioItemStyled, PortfolioLinkStyled, PortfolioListStyled, PortfolioStyled, PortfolioWrapperStyled } from './style';
import portfolioList from '../../../mocks/portfolio';
import PortfolioCard from '../portfolio-card/portfolio-card';

export default function PortfolioList() {
  return (
    <PortfolioStyled>
      <PortfolioWrapperStyled>
        <PortfolioListStyled>
          {portfolioList.map((portfolio) => (
            <PortfolioItemStyled key={portfolio.id}>
              <PortfolioLinkStyled to={portfolio.to}>
                <PortfolioCard {...portfolio} />
              </PortfolioLinkStyled>
            </PortfolioItemStyled>
          ))}
        </PortfolioListStyled>
      </PortfolioWrapperStyled>
    </PortfolioStyled>
  )
}
