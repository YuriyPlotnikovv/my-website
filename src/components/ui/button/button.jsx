import { StyledButton } from './style';

export default function Button({children, link, href, ...props}) {
  return (
    <StyledButton  {...(link ? { to: link, padding: '25px 10px' } : { as: 'a', href, padding: '15px 10px'})}>{children}</StyledButton>
  )
}
