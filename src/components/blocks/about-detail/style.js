import { styled } from 'styled-components';
import { Swiper } from 'swiper/react';
import arrow from '../../../assets/icons/icon-arrow.png';

export const AboutDetailStyled = styled.section`
  display: block;
  background-color: #fafafa;
  box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const AboutDetailWrapperStyled = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  padding: 30px 0;
  display: grid;
  grid-template-columns: repeat(3, auto);
`;

export const AboutDetailSwiperStyled = styled(Swiper)`
  width: 810px;
  grid-column: 2 / 3;
  z-index: 0;

  & .swiper-pagination-bullet-active {
    background-color: #333;
  }
`;

export const AboutDetailItemStyled = styled.div`
  display: block;
  height: 100px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 5px;
`;
export const AboutDetailContentStyled = styled.p`
  margin: 0;
  font-size: 20px;
  line-height: 1.2em;
`;

export const AboutDetailNavButtonStyled = styled.span`
  display: block;
  width: 40px;
  height: 50px;
  cursor: pointer;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: auto auto;

  &:last-of-type {
    transform: rotate(180deg);
  }
`;
