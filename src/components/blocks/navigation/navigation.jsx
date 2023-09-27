import Button from '../../ui/button/button';
import { NavItemStyled, NavListStyled, NavigationStyled } from './style';

export default function Navigation({size}) {
  return (
    <NavigationStyled $size={size}>
      <NavListStyled>
        <NavItemStyled>
          <Button link='about'>обо мне</Button>
        </NavItemStyled>
        <NavItemStyled>
          <Button link='portfolio'>портфолио</Button>
        </NavItemStyled>
        <NavItemStyled>
          <Button link='contacts'>контакты</Button>
        </NavItemStyled>
      </NavListStyled>
    </NavigationStyled>
  )
}
