import { PhotoCardStyled, PhotoImageStyled } from './style';

export default function PhotoCard( props ) {
  return (
    <PhotoCardStyled $width={props.width}>
      <PhotoImageStyled src={props.img} alt={props.title}/>
    </PhotoCardStyled>
  )
}
