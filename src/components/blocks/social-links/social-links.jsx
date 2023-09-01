import Button from '../../ui/button/button';
import { StyledLinksIcon, StyledLinksItem, StyledLinksList } from './style';

import vk from '../../../assets/icons/icon-vk.svg';
import telegram from '../../../assets/icons/icon-telegram.svg';
import github from '../../../assets/icons/icon-github.svg';

export default function Links() {
  return (
    <StyledLinksList>
      <StyledLinksItem>
        <Button href='https://vk.com/yuriy.plotnikovv'>
          <StyledLinksIcon src={vk} alt='VK'/>
        </Button>
      </StyledLinksItem>
      <StyledLinksItem>
        <Button href='https://t.me/yuriyplotnikovv'>
          <StyledLinksIcon src={telegram} alt='Telegram'/>
        </Button>
      </StyledLinksItem>
      <StyledLinksItem>
        <Button href='https://github.com/YuriyPlotnikovv'>
          <StyledLinksIcon src={github} alt='GitHub'/>
        </Button>
      </StyledLinksItem>
    </StyledLinksList>
  )
}
