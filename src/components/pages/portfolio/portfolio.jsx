import Intro from '../../blocks/intro/intro';
import { StyledPortfolio } from './style';
import image from '../../../assets/background-photo/portfolio-background.png';
import PortfolioList from '../../blocks/portfolio-list/portfolio-list';

export default function Portfolio() {
  return (
    <StyledPortfolio>
      <Intro height='450px' title='Портфолио' titleSize='extrabig' textOne='Посмотрите несколько моих последних работ.' textTwo='Я - начинающий специалист, поэтому большая часть проектов выполнена в рамках учебных курсов.' image={image} />
      <PortfolioList />
    </StyledPortfolio>
  )
}
