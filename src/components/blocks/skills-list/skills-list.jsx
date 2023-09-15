import Title from '../../ui/title/title';
import { SkillsHeadingWrapperStyled, SkillsListStyled, SkillsItemStyled, SkillsStyled, SkillsWrapperStyled } from './style';
import SkillsCard from '../skills/skills-card';
import skillsList from '../../../data/skills';

export default function Skills() {
  return (
      <SkillsStyled>
        <SkillsWrapperStyled>
          <SkillsHeadingWrapperStyled>
            <Title level='2' size='small'>Навыки:</Title>
          </SkillsHeadingWrapperStyled>
          <SkillsListStyled>
            {skillsList.slice(0, 15).map((skill) => (
              <SkillsItemStyled key={skill.id}>
                <SkillsCard {...skill} />
              </SkillsItemStyled>
            ))}
          </SkillsListStyled>
        </SkillsWrapperStyled>
    </SkillsStyled>
  )
}
