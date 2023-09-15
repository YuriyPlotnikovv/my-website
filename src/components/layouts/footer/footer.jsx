import Navigation from '../../blocks/navigation/navigation';
import Button from '../../ui/button/button';
import { StyledCopyIcon, StyledCopyright, StyledFooter, StyledFooterWrapper } from './style';
import copyicons from '../../../assets/icons/icons-author.svg';
import { HandySvg } from 'handy-svg';

export default function Footer() {
  return (
    <StyledFooter>
      <StyledFooterWrapper>
        <StyledCopyright>&#169; 2023 Yuriy Plotnikov</StyledCopyright>
        <Button href='https://icons8.com'>
          icons by
          <StyledCopyIcon src={copyicons} alt='Icons8' />
        </Button>
        <Navigation />
      </StyledFooterWrapper>
    </StyledFooter>
  )
}
