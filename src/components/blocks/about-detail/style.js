import { styled } from 'styled-components';
import { Swiper } from 'swiper/react';
import arrow from '../../../assets/icons/icon-arrow.png';

export const AboutDetailStyled = styled.section`
  display: block;

  background-color: #fafafa;
  box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const AboutDetailWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  max-width: 1040px;
  margin: 0 auto;
  padding: 30px 0;
`;

export const AboutDetailSwiperStyled = styled(Swiper)`
  z-index: 0;

  grid-column: 2 / 3;
  width: 810px;

  & .swiper-pagination-bullet-active {
    background-color: #333;
  }
`;

export const AboutDetailItemStyled = styled.div`
  display: block;
  height: 100px;
  margin: 5px;
  padding: 20px;

  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
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
  margin: auto auto;

  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  cursor: pointer;

  &:last-of-type {
    transform: rotate(180deg);
  }
`;
