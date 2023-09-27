import { PortfolioCardStyled, PortfolioImageStyled, PortfolioTextStyled } from './style';
import Title, {TitleLevel, TitleSize} from '../../ui/title/title';

export default function PortfolioCard({logo, title, textOne}) {
  return (
    <PortfolioCardStyled>
      <PortfolioImageStyled src={logo} alt={title}/>
      <Title level={TitleLevel.H3} size={TitleSize.EXTRA_SMALL}>
        {title}
      </Title>
      <PortfolioTextStyled>{textOne}</PortfolioTextStyled>
    </PortfolioCardStyled>
  )
}
