import { StyledButton } from './style';

export default function Button({children, link, href, ...props}) {
  return (
    <StyledButton  {...(link ? { to: link } : { as: 'a', href})}>{children}</StyledButton>
  )
}
