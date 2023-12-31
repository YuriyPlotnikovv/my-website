import AboutDetail from '../../blocks/about-detail/about-detail';
import Intro from '../../blocks/intro/intro';
import PhotoList from '../../blocks/photo-list/photo-list';
import Skills from '../../blocks/skills-list/skills-list';
import { AboutStyled } from './style';
import image from '../../../assets/background-photo/about-photo.webp';
import MyWay from '../../blocks/my-way/my-way';
import photoList from '../../../data/photo';

export default function About() {
  return (
    <AboutStyled>
      <Intro height='450px' title='Обо мне' titleSize='extrabig' textOne='Я - начинающий фронтендер, живущий в Сочи.' textTwo='Активно развиваюсь в этом направлении с 2022 года. Не только центрирую div&#8242;ы, но и веду активный образ жизни.' image={image} />
      <PhotoList background='#fafafa' list={photoList} length={5} width='170px' />
      <Skills />
      <AboutDetail />
      <MyWay />
    </AboutStyled>
  )
}
