import Intro from '../../blocks/intro/intro';
import MyWorks from '../../blocks/my-works/my-works';
import { StyledMain } from './style';
import image from '../../../assets/background-photo/main-photo.png';
import background from '../../../assets/background-photo/main-background.png';

export default function Main() {
  return (
    <StyledMain>
      <Intro height='450px' title='Front-end Developer' titleSize='big' textOne='Пишу чистый, изящный и эффективный код' image={image} background={background} />
      <MyWorks />
    </StyledMain>
  )
}
