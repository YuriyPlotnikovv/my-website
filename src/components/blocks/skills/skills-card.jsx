import { SkillsCardStyled, SkillsLevelStyled, SkillsLogoStyled, SkillsTextStyled } from './style';

export default function SkillsCard( { name, level} ) {
  return (
    <SkillsCardStyled $level={level}>
      <SkillsTextStyled>{name}</SkillsTextStyled>
      <SkillsLevelStyled>{level}</SkillsLevelStyled>
    </SkillsCardStyled>
  )
}
