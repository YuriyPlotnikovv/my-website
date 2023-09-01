import portfolioList from '../../../mocks/portfolio';
import PortfolioCard from '../portfolio-card/portfolio-card';
import { StyledMyWorks, StyledMyWorksItem, StyledMyWorksList, StyledMyWorksWrapper } from './style';


export default function MyWorks() {
  return (
    <StyledMyWorks>
      <StyledMyWorksWrapper>
        <StyledMyWorksList>
          {portfolioList.slice(0, 3).map((portfolio) => (
            <StyledMyWorksItem key={portfolio.id}>
              <PortfolioCard {...portfolio} />
            </StyledMyWorksItem>
          ))}
        </StyledMyWorksList>
      </StyledMyWorksWrapper>
    </StyledMyWorks>
  )
}
