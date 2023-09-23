import { styled } from 'styled-components';

export const SkillsCardStyled = styled.div`
  display: flex;
  padding: 10px 20px;
  width: ${(props) => props.$level * 10 + '%'};
  background-color: #e6e6e6;
  border-radius: 10px 0 0 10px;
  font-family: 'ProximaNova-LightIt';
  box-sizing: border-box;
`;

export const SkillsTextStyled = styled.p`
  margin: 0;
`;

export const SkillsLevelStyled = styled.span`
  margin-left: auto;
`;
