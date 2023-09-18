import portfolioList from '../../../data/portfolio';
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
          {portfolioList.slice(1, 4).map((portfolio) => (
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
