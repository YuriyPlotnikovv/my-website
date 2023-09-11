import logo from '../../../assets/logo.svg';
import { StyledImg, StyledLogo } from './style';

export default function Logo() {
  return (
    <StyledLogo to='/'>
      <StyledImg src={logo} alt='Yuriy Plotnikov' />
    </StyledLogo>
  )
}
