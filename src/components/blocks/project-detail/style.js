import { styled } from 'styled-components';

export const ProjectStyled = styled.section`
  display: block;

  background-color: ${(props) => props.theme.backgroundColorGray};
  box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const ProjectWrapperStyled = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  padding: 30px 0;
`;

export const ProjectHeadingWrapperStyled = styled.div`
  position: relative;

  width: max-content;
  margin: 0 auto;

  color: ${(props) => props.theme.colorTextGray};

  &::before {
    position: absolute;
    top: calc(50% - 1px);
    left: -320px;
    z-index: 0;

    width: 300px;
    height: 1px;

    background-color: ${(props) => props.theme.backgroundColorGrayTwo};

    content: '';
  }
  &::after {
    position: absolute;
    top: calc(50% - 1px);
    right: -320px;
    z-index: 0;

    width: 300px;
    height: 1px;

    background-color: ${(props) => props.theme.backgroundColorGrayTwo};

    content: '';
  }
`;

export const ProjectDataListStyled = styled.dl`
  margin: 0;
  padding: 20px 0;
`;

export const ProjectDataTitleStyled = styled.dt`
  color: ${(props) => props.theme.colorTextBlackTwo};
`;

export const ProjectDataDescriptionStyled = styled.dd`
  margin-bottom: 10px;

  color: ${(props) => props.theme.colorTextGray};
`;

export const ProjectLinksBlockStyled = styled.div`
  display: flex;
  justify-content: space-evenly;

  font-family: 'ProximaNova-Bold';
  font-size: 24px;
  font-weight: 600;
  text-decoration: underline;
  color: ${(props) => props.theme.colorTextBlackTwo};
`;
