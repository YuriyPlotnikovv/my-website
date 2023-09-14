import Navigation from '../../blocks/navigation/navigation';
import Links from '../../blocks/social-links/social-links';
import Logo from '../../ui/logo/logo';
import { StyledHeader, StyledHeaderWrapper } from './style';

import vk from '../../../assets/icons/icon-vk.svg';
import telegram from '../../../assets/icons/icon-telegram.svg';
import instagram from '../../../assets/icons/icon-instagram.svg';
import github from '../../../assets/icons/icon-github.svg';

export default function Header() {
  return (
    <StyledHeader>
      <StyledHeaderWrapper>
        <Logo />
        <Navigation/>
        <Links vk={vk} telegram={telegram} instagram={instagram} github={github}/>
      </StyledHeaderWrapper>
    </StyledHeader>
  )
}
