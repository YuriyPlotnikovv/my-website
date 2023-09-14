import { styled } from 'styled-components';

export const SkillsStyled = styled.section`
  display: block;
  background-color: #fff;
  box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const SkillsWrapperStyled = styled.div`
  padding: 30px 0 70px 0;
  margin: 0 auto;
  max-width: 1040px;
`;

export const SkillsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 10px 0;
  margin: 30px auto 0;
  padding: 0;
  width: 800px;
`;

export const SkillsItemStyled = styled.li`
  padding: 0;
  list-style-type: none;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const SkillsHeadingWrapperStyled = styled.div`
  margin: 0 auto;
  width: max-content;
  position: relative;
  color: #757575;

  &::before {
    content: '';
    position: absolute;
    left: -320px;
    top: calc(50% - 1px);
    width: 300px;
    height: 1px;
    background-color: #ddd;
    z-index: 0;
  }
  &::after {
    content: '';
    position: absolute;
    right: -320px;
    top: calc(50% - 1px);
    width: 300px;
    height: 1px;
    background-color: #ddd;
    z-index: 0;
  }
`;
