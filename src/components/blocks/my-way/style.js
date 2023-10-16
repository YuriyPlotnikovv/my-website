import { styled } from 'styled-components';
import arrow from '../../../assets/arrow.svg';

export const MyWayStyled = styled.section`
  display: block;

  background-color: #fff;
  box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const MyWayWrapperStyled = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  padding: 30px 0 70px 0;
`;

export const MyWayListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  margin: 30px 0 0;
  padding: 0 0 200px 0;

  background-image: url(${arrow});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const MyWayItemStyled = styled.li`
  position: relative;

  max-width: 450px;
  margin-left: ${(props) => (props.$id % 2 ? 'calc(100% - 500px)' : '50px')};
  padding: 0;

  background-color: #e8e8e8;
  border-radius: 10px;
  box-shadow: ${(props) => (props.$id % 2 ? '3px' : '-3px')} 1px 4px 0px
  rgba(0, 0, 0, 0.1)};
  list-style-type: none;
`;

export const MyWayHeadingWrapperStyled = styled.div`
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
