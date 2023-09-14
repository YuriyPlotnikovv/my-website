import AboutDetail from '../../blocks/about-detail/about-detail';
import Intro from '../../blocks/intro/intro';
import PhotoList from '../../blocks/photo-list/photo-list';
import Skills from '../../blocks/skills-list/skills-list';
import { StyledAbout } from './style';
import image from '../../../assets/myPhoto.png';

export default function About() {
  return (
    <StyledAbout>
      <Intro title='Обо мне' titleSize='extrabig' textOne='Я - начинающий фронтендер, живущий в Сочи.' textTwo='Активно развиваюсь в этом направлении с 2022 года. Не только центрую div&#8242;ы, но и веду активный образ жизни.' image={image} />
      <PhotoList />
      <Skills />
      <AboutDetail />
    </StyledAbout>
  )
}
