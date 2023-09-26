import { PhotoStyled, PhotoWrapperStyled, PhotoListStyled, PhotoItemStyled, PhotoLinkStyled } from './style';
import PhotoCard from '../photo-card/photo-card';
import Button from '../../ui/button/button';

export default function PhotoList({background, list, length, width, href}) {
  return (
    <PhotoStyled $background={background}>
      <PhotoWrapperStyled>
        <PhotoListStyled>
          {list.slice(0, length).map((photo) => (
            <PhotoItemStyled $href={href} key={photo.id}>
              {(href ? (<Button href={href}>
                <PhotoCard {...photo} width={width} />
              </Button>) : (<PhotoCard {...photo} width={width} />))}
            </PhotoItemStyled>
          ))}
        </PhotoListStyled>
      </PhotoWrapperStyled>
    </PhotoStyled>
  )
}
