import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const MyWorksStyled = styled.section`
  display: block;

  background-color: ${(props) => props.theme.backgroundColorGray};
  box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const MyWorksWrapperStyled = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  padding: 30px 0 70px 0;
`;

export const MyWorksListStyled = styled.ul`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px 0;
  margin: 30px 0 0;
  padding: 0;
`;

export const MyWorksItemStyled = styled.li`
  padding: 0;

  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 10px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
  list-style-type: none;

  &:hover {
    box-shadow: 0 4px 8px 0px rgba(0, 0, 0, 0.1);
  }
`;

export const MyWorksLinkStyled = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const MyWorksHeadingWrapperStyled = styled.div`
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
