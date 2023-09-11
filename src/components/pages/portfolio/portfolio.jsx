import Intro from '../../blocks/intro/intro';
import { StyledPortfolio } from './style';
import image from '../../../assets/myPhoto.png';
import PortfolioList from '../../blocks/portfolio-list/portfolio-list';

export default function Portfolio() {
  return (
    <StyledPortfolio>
      <Intro title='Портфолио' titleSize='extrabig' textOne='Посмотрите несколько моих последних работ.' textTwo='Я - начинающий специалист, поэтому часть проектов выполнена в рамках учебных курсов, остальные - это Pet-проекты.' image={image} />
      <PortfolioList />
    </StyledPortfolio>
  )
}
