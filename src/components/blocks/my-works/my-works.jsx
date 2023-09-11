import portfolioList from '../../../mocks/portfolio';
import Title from '../../ui/title/title';
import PortfolioCard from '../portfolio-card/portfolio-card';
import { MyWorksStyled, MyWorksItemStyled, MyWorksListStyled, MyWorksWrapperStyled, MyWorksLinkStyled, MyWorksHeadingWrapperStyled } from './style';


export default function MyWorks() {
  return (
    <MyWorksStyled>
      <MyWorksWrapperStyled>
        <MyWorksHeadingWrapperStyled>
          <Title level='2' size='small'>Последние работы:</Title>
        </MyWorksHeadingWrapperStyled>
        <MyWorksListStyled>
          {portfolioList.slice(0, 3).map((portfolio) => (
            <MyWorksItemStyled key={portfolio.id}>
              <MyWorksLinkStyled to={portfolio.to}>
                <PortfolioCard {...portfolio} />
              </MyWorksLinkStyled>
            </MyWorksItemStyled>
          ))}
        </MyWorksListStyled>
      </MyWorksWrapperStyled>
    </MyWorksStyled>
  )
}
