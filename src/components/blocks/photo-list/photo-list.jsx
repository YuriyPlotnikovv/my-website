import { PhotoStyled, PhotoWrapperStyled, PhotoListStyled, PhotoItemStyled, PhotoLinkStyled } from './style';
import PhotoCard from '../photo-card/photo-card';
import photoList from '../../../data/photo';

export default function PhotoList({background, list, length, width, href}) {
  return (
    <PhotoStyled $background={background}>
      <PhotoWrapperStyled>
        <PhotoListStyled>
          {list.slice(0, length).map((photo) => (
            <PhotoItemStyled key={photo.id}>
              <PhotoLinkStyled to={href}>
                <PhotoCard {...photo} width={width} />
              </PhotoLinkStyled>
            </PhotoItemStyled>
          ))}
        </PhotoListStyled>
      </PhotoWrapperStyled>
    </PhotoStyled>
  )
}
