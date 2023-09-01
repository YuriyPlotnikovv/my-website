import Navigation from '../../blocks/navigation/navigation';
import Button from '../../ui/button/button';
import { StyledCopyIcon, StyledCopyright, StyledFooter, StyledFooterWrapper, StyledIconsCopy } from './style';
import copyicons from '../../../assets/icons/icons-autor.svg';

export default function Footer() {
  return (
    <StyledFooter>
      <StyledFooterWrapper>
        <StyledCopyright>&#169; 2023 Yuriy Plotnikov</StyledCopyright>
        <Button href='https://icons8.com'>
          <span>icons by</span>
          <StyledCopyIcon src={copyicons} />
        </Button>
        <Navigation />
      </StyledFooterWrapper>
    </StyledFooter>
  )
}
