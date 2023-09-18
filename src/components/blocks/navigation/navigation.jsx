import Button from '../../ui/button/button';
import { StyledNavItem, StyledNavList, StyledNavigation } from './style';

export default function Navigation() {
  return (
    <StyledNavigation>
      <StyledNavList>
        <StyledNavItem>
          <Button link='about'>обо мне</Button>
        </StyledNavItem>
        <StyledNavItem>
          <Button link='portfolio'>портфолио</Button>
        </StyledNavItem>
        <StyledNavItem>
          <Button link='contacts'>контакты</Button>
        </StyledNavItem>
      </StyledNavList>
    </StyledNavigation>
  )
}
