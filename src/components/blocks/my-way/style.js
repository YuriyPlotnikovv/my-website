import { styled } from 'styled-components';
import arrow from '../../../assets/arrow.svg';

export const MyWayStyled = styled.section`
  display: block;
  background-color: #fff;
  box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const MyWayWrapperStyled = styled.div`
  padding: 30px 0 70px 0;
  margin: 0 auto;
  max-width: 1040px;
`;

export const MyWayListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  background-image: url(${arrow});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  gap: 20px 0;
  margin: 30px 0 0;
  padding: 0 0 200px 0;
`;

export const MyWayItemStyled = styled.li`
  padding: 0;
  margin-left: ${(props) => (props.$id % 2 ? 'calc(100% - 470px)' : '20px')};
  list-style-type: none;
  background-color: #e8e8e8;
  border-radius: ${(props) =>
    props.$id % 2 ? '0 10px 10px 0' : '10px 0 0 10px'};
  box-shadow: ${(props) => (props.$id % 2 ? '3px' : '-3px')} 1px 4px 0px
    rgba(0, 0, 0, 0.1);
  max-width: 450px;
  position: relative;

  &::before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    ${(props) =>
      props.$id % 2
        ? 'left: -50px;     border-right: 50px solid #e8e8e8;'
        : 'right: -49.5px;     border-left: 50px solid #e8e8e8;'}
    border-top: 30px solid transparent;
    border-bottom: 29px solid transparent;
  }
`;

export const MyWayHeadingWrapperStyled = styled.div`
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
