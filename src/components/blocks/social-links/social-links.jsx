import Button from '../../ui/button/button';
import { StyledLinksItem, StyledLinksList, HandySvgStyled } from './style';

import iconsList from '../../../data/icons';
import Title from '../../ui/title/title';

export default function Links({$grid, $title, $color, $size, $start, $length}) {
  return (
    <StyledLinksList $grid={$grid}>
      {iconsList.slice($start, $length).map((icon) => (
      <StyledLinksItem key={icon.id}>
        <Button href={icon.url}>
            <HandySvgStyled $grid={$grid} $color={$color} $size={$size} src={icon.image} alt={icon.title} />
            {($title ? <Title size='small' level='3'>{icon.title}</Title> : <></>)}
        </Button>
      </StyledLinksItem>
      ))}
    </StyledLinksList>
  )
}
