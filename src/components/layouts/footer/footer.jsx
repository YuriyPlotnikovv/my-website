import Navigation from '../../blocks/navigation/navigation';
import Button from '../../ui/button/button';
import { FooterIconsStyled, StyledCopyIcon, StyledCopyright, StyledFooter, StyledFooterWrapper } from './style';
import copyicons from '../../../assets/icons/icons-author.svg';
import { HandySvg } from 'handy-svg';

export default function Footer() {
  return (
    <StyledFooter>
      <StyledFooterWrapper>
        <StyledCopyright>&#169; 2023 Yuriy Plotnikov</StyledCopyright>
        <FooterIconsStyled>
            <span>icons by</span>
          <Button padding href='https://icons8.com'>
            Icons8
          </Button>
          <span>&</span>
          <Button padding href='https://www.flaticon.com/ru/free-icons'>
            Freepik
          </Button>
        </FooterIconsStyled>
        <Navigation />
      </StyledFooterWrapper>
    </StyledFooter>
  )
}
