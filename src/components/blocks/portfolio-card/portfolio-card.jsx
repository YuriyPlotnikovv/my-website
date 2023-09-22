import { StyledPortfolioCard, StyledPortfolioImage, StyledPortfolioText } from './style';
import Title, {TitleLevel, TitleSize} from '../../ui/title/title';

export default function PortfolioCard({logo, title, textOne}) {
  return (
    <StyledPortfolioCard>
      <StyledPortfolioImage src={logo} alt={title}/>
      <Title level={TitleLevel.H3} size={TitleSize.EXTRA_SMALL}>
        {title}
      </Title>
      <StyledPortfolioText>{textOne}</StyledPortfolioText>
    </StyledPortfolioCard>
  )
}
