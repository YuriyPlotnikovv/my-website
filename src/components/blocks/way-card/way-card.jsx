import { WayCardStyled, WayTextStyled } from './style';

export default function WayCard( { text} ) {
  return (
    <WayCardStyled>
      <WayTextStyled>{text}</WayTextStyled>
    </WayCardStyled>
  )
}
