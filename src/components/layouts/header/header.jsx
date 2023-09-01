import Navigation from '../../blocks/navigation/navigation';
import Links from '../../blocks/social-links/social-links';
import Logo from '../../ui/logo/logo';
import { StyledHeader, StyledHeaderWrapper } from './style';

export default function Header() {
  return (
    <StyledHeader>
      <StyledHeaderWrapper>
        <Logo />
        <Navigation/>
        <Links/>
      </StyledHeaderWrapper>
    </StyledHeader>
  )
}
