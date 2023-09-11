import { PhotoStyled, PhotoWrapperStyled, PhotoListStyled, PhotoItemStyled, PhotoLinkStyled } from './style';
import PhotoCard from '../photo-card/photo-card';
import photoList from '../../../mocks/photo';

export default function PhotoList() {
  return (
    <PhotoStyled>
      <PhotoWrapperStyled>
        <PhotoListStyled>
          {photoList.slice(0, 6).map((photo) => (
            <PhotoItemStyled key={photo.id}>
              <PhotoLinkStyled to='https://vk.com/albums344091415'>
                <PhotoCard {...photo} />
              </PhotoLinkStyled>
            </PhotoItemStyled>
          ))}
        </PhotoListStyled>
      </PhotoWrapperStyled>
    </PhotoStyled>
  )
}
