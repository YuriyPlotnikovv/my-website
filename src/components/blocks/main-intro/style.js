import { styled } from 'styled-components';
import mainintro from '../../../assets/main-intro.jpg';

export const StyledMainIntro = styled.section`
  display: block;
  background-color: #fff;
  box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const StyledMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  background-image: url(${mainintro});
  background-size: 500px;
  background-repeat: no-repeat;
  background-position: right center;
  width: 1040px;
  margin: 0 auto;
`;
