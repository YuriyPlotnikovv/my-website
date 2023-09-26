import { styled } from 'styled-components';

export const ProjectStyled = styled.section`
  display: block;
  background-color: #fafafa;
  box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const ProjectWrapperStyled = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  padding: 30px 0;
`;

export const ProjectHeadingWrapperStyled = styled.div`
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

export const ProjectDataListStyled = styled.dl`
  margin: 0;
  padding: 20px 0;
`;

export const ProjectDataTitleStyled = styled.dt`
  color: #333333;
`;

export const ProjectDataDescriptionStyled = styled.dd`
  color: #757575;
  margin-bottom: 10px;
`;

export const ProjectLinksBlockStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 24px;
  font-weight: 600;
  text-decoration: underline;
  color: #333333;
  font-family: 'ProximaNova-Bold';
`;
