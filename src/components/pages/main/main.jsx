import Intro from '../../blocks/intro/intro';
import MyWorks from '../../blocks/my-works/my-works';
import { MainStyled } from './style';
import image from '../../../assets/background-photo/main-photo.png';
import background from '../../../assets/background-photo/main-background.png';

export default function Main() {
  return (
    <MainStyled>
      <Intro height='450px' title='Frontend Developer' titleSize='big' textOne='Пишу чистый, изящный и эффективный код.' image={image} background={background} />
      <MyWorks />
    </MainStyled>
  )
}
