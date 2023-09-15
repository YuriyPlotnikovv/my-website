import Button from '../../ui/button/button';
import { StyledLinksItem, StyledLinksList, HandySvgStyled } from './style';

import iconsList from '../../../data/icons';

export default function Links({$color, $size, $start, $length}) {
  return (
    <StyledLinksList>
      {iconsList.slice($start, $length).map((icon) => (
      <StyledLinksItem key={icon.id}>
        <Button href={icon.url}>
          <HandySvgStyled $color={$color} $size={$size} src={icon.image} alt={icon.title} />
        </Button>
      </StyledLinksItem>
      ))}
    </StyledLinksList>
  )
}
