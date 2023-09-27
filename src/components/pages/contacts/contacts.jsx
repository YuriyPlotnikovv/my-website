import Intro from '../../blocks/intro/intro';
import { ContactsSectionStyled, ContactsWrapperStyled, ContactsStyled } from './style';
import Links from '../../blocks/social-links/social-links';
import image from '../../../assets/background-photo/contacts-background.png';

export default function Contacts() {
  return (
    <ContactsStyled>
      <Intro height='450px' title='Контакты' titleSize='extrabig' textOne='Свяжитесь со мной в одной из социальных сетей или по электронной почте.' textTwo='Буду рад обратной связи!' image={image} />
      <ContactsSectionStyled>
        <ContactsWrapperStyled>
          <Links $grid $title $start='2' $length='6' $color='#333' $size='60px' />
        </ContactsWrapperStyled>
      </ContactsSectionStyled>
    </ContactsStyled>
  )
}
