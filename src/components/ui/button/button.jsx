import { StyledButton } from './style';

export default function Button({ children, link, href, padding }) {
  return (
    <StyledButton $padding={padding}  {...(link ? { to: link } : { as: 'a', href,  target:'_blank'})}>{children}</StyledButton>
  )
}
