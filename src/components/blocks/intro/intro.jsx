import Title from '../../ui/title/title';
import { IntroStyled, IntroWrapperStyled, IntroTextStyled } from './style';

export default function Intro({ title, titleSize, textOne, textTwo, image, background, height }) {
  return (
    <IntroStyled>
      <IntroWrapperStyled $height={height} $image={image} $background={background}>
        <Title level='1' black size={titleSize}>{title}</Title>
        <IntroTextStyled $color='#757575' $size='26px'>{textOne}</IntroTextStyled>
        <IntroTextStyled $color='#333' $size='18px'>{textTwo}</IntroTextStyled>
      </IntroWrapperStyled>
    </IntroStyled>
  )
}
