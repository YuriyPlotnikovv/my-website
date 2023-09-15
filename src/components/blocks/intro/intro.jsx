import Title from '../../ui/title/title';
import { TextWrapperStyled, IntroStyled, IntroWrapperStyled, IntroTextStyled } from './style';
import Links from '../social-links/social-links';

export default function Intro({ title, titleSize, textOne, textTwo, image, background, $contacts }) {
  return (
    <IntroStyled>
      <IntroWrapperStyled $image={image} $background={background}>
        <TextWrapperStyled>
          <Title level='1' size={titleSize}>{title}</Title>
          <IntroTextStyled $color='#757575' $size='26px'>{textOne}</IntroTextStyled>
          <IntroTextStyled $color='#333' $size='18px'>{textTwo}</IntroTextStyled>
          {($contacts ? <Links $start='1' $length='6' $color='#333' $size='60px' /> : <></> )}
        </TextWrapperStyled>
      </IntroWrapperStyled>
    </IntroStyled>
  )
}
