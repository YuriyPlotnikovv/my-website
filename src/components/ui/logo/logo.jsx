import logo from '../../../assets/icons/icon-logo.svg';
import { ImgStyled, LogoStyled } from './style';

export default function Logo() {
  return (
    <LogoStyled to='/'>
      <ImgStyled src={logo} alt='Yuriy Plotnikov' />
    </LogoStyled>
  )
}
