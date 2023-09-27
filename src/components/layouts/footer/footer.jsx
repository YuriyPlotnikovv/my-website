import Navigation from '../../blocks/navigation/navigation';
import Button from '../../ui/button/button';
import { CopyIconStyled, CopyrightStyled, FooterStyled, FooterWrapperStyled } from './style';
import copyicons from '../../../assets/icons/icons-author.svg';

export default function Footer() {
  return (
    <FooterStyled>
      <FooterWrapperStyled>
        <CopyrightStyled>&#169; 2023 Yuriy Plotnikov</CopyrightStyled>
        <Button href='https://icons8.com'>
          icons by
          <CopyIconStyled src={copyicons} alt='Icons8' />
        </Button>
        <Navigation />
      </FooterWrapperStyled>
    </FooterStyled>
  )
}
