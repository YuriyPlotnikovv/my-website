import { styled } from 'styled-components';

export const SkillsStyled = styled.section`
  display: block;

  background-color: #fff;
  box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const SkillsWrapperStyled = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  padding: 30px 0 70px 0;
`;

export const SkillsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 10px 0;
  width: 800px;
  margin: 30px auto 0;
  padding: 0;
`;

export const SkillsItemStyled = styled.li`
  padding: 0;

  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
  list-style-type: none;
`;

export const SkillsHeadingWrapperStyled = styled.div`
  position: relative;

  width: max-content;
  margin: 0 auto;

  color: #757575;

  &::before {
    position: absolute;
    top: calc(50% - 1px);
    left: -320px;
    z-index: 0;

    width: 300px;
    height: 1px;

    background-color: #ddd;

    content: '';
  }
  &::after {
    position: absolute;
    top: calc(50% - 1px);
    right: -320px;
    z-index: 0;

    width: 300px;
    height: 1px;

    background-color: #ddd;

    content: '';
  }
`;
