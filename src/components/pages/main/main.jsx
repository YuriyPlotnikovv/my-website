import Intro from '../../blocks/intro/intro';
import MyWorks from '../../blocks/my-works/my-works';
import { StyledMain } from './style';
import image from '../../../assets/myPhoto.png';
import background from '../../../assets/background.png';

export default function Main() {
  return (
    <StyledMain>
      <Intro title='Front-end Developer' titleSize='big' textOne='Пишу чистый, изящный и эффективный код' image={image} background={background} />
      <MyWorks />
    </StyledMain>
  )
}
