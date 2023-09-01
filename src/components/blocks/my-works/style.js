import { styled } from 'styled-components';

export const StyledMyWorks = styled.section`
  display: block;
  background-color: #fafafa;
  box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const StyledMyWorksWrapper = styled.div`
  width: 1040px;
  padding: 70px 0;
  margin: 0 auto;
`;

export const StyledMyWorksList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;
`;

export const StyledMyWorksItem = styled.li`
  padding: 0;
  list-style-type: none;
  background-color: #fff;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
`;
