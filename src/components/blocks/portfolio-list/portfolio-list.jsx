import { PortfolioItemStyled, PortfolioLinkStyled, PortfolioListStyled, PortfolioStyled, PortfolioWrapperStyled } from './style';
import portfolioList from '../../../data/portfolio';
import PortfolioCard from '../portfolio-card/portfolio-card';

export default function PortfolioList() {
  return (
    <PortfolioStyled>
      <PortfolioWrapperStyled>
        <PortfolioListStyled>
          {portfolioList.slice(0, 5).map((portfolio) => (
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
