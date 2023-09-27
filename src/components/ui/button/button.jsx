import { ButtonStyled } from './style';

export default function Button({ children, link, href, padding }) {
  return (
    <ButtonStyled $padding={padding}  {...(link ? { to: link } : { as: 'a', href,  target:'_blank'})}>{children}</ButtonStyled>
  )
}
