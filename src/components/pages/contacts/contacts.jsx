import Intro from '../../blocks/intro/intro';
import { ContactsSectionStyled, ContactsWrapperStyled, StyledContacts } from './style';
import Links from '../../blocks/social-links/social-links';
import image from '../../../assets/myPhoto.png';

export default function Contacts() {
  return (
    <StyledContacts>
      <Intro height='450px' title='Контакты' titleSize='extrabig' textOne='Свяжитесь со мной в одной из социальных сетей или напишите на электронную почту.' image={image} />
      <ContactsSectionStyled>
        <ContactsWrapperStyled>
          <Links $grid $title $start='2' $length='6' $color='#333' $size='60px' />
        </ContactsWrapperStyled>
      </ContactsSectionStyled>
    </StyledContacts>
  )
}
