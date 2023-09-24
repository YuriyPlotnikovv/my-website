import Intro from '../../blocks/intro/intro';
import { SiteCardStyled } from './style';
import portfolioList from '../../../data/portfolio';
import ProjectDetail from '../../blocks/project-detail/project-detail';
import PhotoList from '../../blocks/photo-list/photo-list';

export default function SiteCard({id}) {
  let site = portfolioList.find((portfolio) => portfolio.id === id);

  return (
    <SiteCardStyled>
      <Intro height='300px' title={site.title} titleSize='big' textOne={site.textOne} textTwo={site.textTwo} image={site.logo} />
      <ProjectDetail features={site.features} deploy={site.deploy} repository={site.repository} />
      <PhotoList background='#ffffff' list={site.images} length={6} href={site.deploy}/>
    </ SiteCardStyled>
  )
}
