import Intro from '../../blocks/intro/intro';
import { PortfolioStyled } from './style';
import image from '../../../assets/background-photo/portfolio-background.webp';
import PortfolioList from '../../blocks/portfolio-list/portfolio-list';

export default function Portfolio() {
  return (
    <PortfolioStyled>
      <Intro height='450px' title='Портфолио' titleSize='extrabig' textOne='Посмотрите несколько моих последних работ.' textTwo='Я - начинающий специалист, поэтому большая часть проектов выполнена в рамках учебных курсов.' image={image} />
      <PortfolioList />
    </PortfolioStyled>
  )
}
