import { styled } from 'styled-components';

export const IntroStyled = styled.section`
  display: block;
  background-color: #fff;
  box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const IntroWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 450px;
  background-image: url(${(props) => props.image}),
    url(${(props) => props.background});
  background-size: 500px, 900px;
  background-repeat: no-repeat;
  background-position:
    right -40px,
    right 50px;
  margin: 0 auto;
  max-width: 1040px;
  position: relative;
`;

export const TextWrapperStyled = styled.div`
  color: #333;
  padding: 50px;
  font-size: 26px;
  font-weight: 700;
`;

export const IntroTextStyled = styled.p`
  color: ${(props) => props.$color};
  font-size: ${(props) => props.$size};
  max-width: 500px;
  line-height: 1.3em;
  margin: 0 0 24px;
`;