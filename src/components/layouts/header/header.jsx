import Navigation from '../../blocks/navigation/navigation';
import Links from '../../blocks/social-links/social-links';
import Logo from '../../ui/logo/logo';
import { StyledHeader, StyledHeaderWrapper } from './style';

export default function Header() {
  return (
    <StyledHeader>
      <StyledHeaderWrapper>
        <Logo />
        <Navigation size />
        <Links $start='0' $length='3' $color='#fff' $size='40px' />
      </StyledHeaderWrapper>
    </StyledHeader>
  )
}
