import Intro from '../../blocks/intro/intro';
import { StyledContacts } from './style';
import image from '../../../assets/myPhoto.png';
import Mail from '../../blocks/mail-form/mail-form';

export default function Contacts() {
  return (
    <StyledContacts>
      <Intro title='Контакты' titleSize='extrabig' textOne='Свяжитесь со мной через социальные сети или электронную почту.' image={image} />
      <Mail />
    </StyledContacts>
  )
}
