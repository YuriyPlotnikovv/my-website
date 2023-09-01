import Button from '../../ui/button/button';
import { StyledNavItem, StyledNavList, StyledNavigation } from './style';

export default function Navigation() {
  return (
    <StyledNavigation>
      <StyledNavList>
        <StyledNavItem>
          <Button link='about'>Обо мне</Button>
        </StyledNavItem>
        <StyledNavItem>
          <Button link='portfolio'>Портфолио</Button>
        </StyledNavItem>
        <StyledNavItem>
          <Button link='contacts'>Контакты</Button>
        </StyledNavItem>
      </StyledNavList>
    </StyledNavigation>
  )
}
