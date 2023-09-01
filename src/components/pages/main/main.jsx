import MainIntro from '../../blocks/main-intro/main-intro';
import MyWorks from '../../blocks/my-works/my-works';
import { StyledMain } from './style';

export default function Main() {
  return (
    <StyledMain>
      <MainIntro />
      <MyWorks />
    </StyledMain>
  )
}
