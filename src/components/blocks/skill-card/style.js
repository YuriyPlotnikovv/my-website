import { styled } from 'styled-components';

export const SkillsCardStyled = styled.div`
  display: flex;
  box-sizing: border-box;
  width: ${(props) => props.$level * 10 + '%'};
  padding: 10px 20px;

  font-family: 'ProximaNova-LightIt';

  background-color: ${(props) => props.theme.backgroundColorGrayFour};
  border-radius: 10px 0 0 10px;
`;

export const SkillsTextStyled = styled.p`
  margin: 0;
`;

export const SkillsLevelStyled = styled.span`
  margin-left: auto;
`;
