import { HandySvg } from 'handy-svg';
import logo from '../../../assets/icons/icon-logo.svg';
import { StyledLogo } from './style';

export default function Logo() {
  return (
    <StyledLogo to='/'>
      <HandySvg className='logo' src={logo} alt='Yuriy Plotnikov' />
    </StyledLogo>
  )
}
