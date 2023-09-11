import { PhotoCardStyled, PhotoImageStyled } from './style';

export default function PhotoCard({img, title}) {
  return (
    <PhotoCardStyled>
      <PhotoImageStyled src={img} alt={title}/>
    </PhotoCardStyled>
  )
}
