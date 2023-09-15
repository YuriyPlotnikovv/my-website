import Intro from '../../blocks/intro/intro';
import { StyledContacts } from './style';
import image from '../../../assets/myPhoto.png';

export default function Contacts() {
  return (
    <StyledContacts>
      <Intro $contacts title='Контакты' titleSize='extrabig' textOne='Свяжитесь со мной через социальные сети или электронную почту.' image={image} />
    </StyledContacts>
  )
}
