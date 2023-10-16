import { styled } from 'styled-components';

export const IntroStyled = styled.section`
  display: block;

  background-color: #ffffff;
  box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
`;

export const IntroWrapperStyled = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  max-width: 1040px;
  height: ${(props) => props.$height};
  margin: 0 auto;
  padding: 50px;

  font-size: 26px;
  font-weight: 700;
  color: #333333;

  background-image: url(${(props) => props.$image}),
    url(${(props) => props.$background});
  background-size: 400px, 900px;
  background-repeat: no-repeat;
  background-position:
    600px,
    right bottom;
`;

export const IntroTextStyled = styled.p`
  max-width: 500px;
  margin: 0 0 24px;

  font-size: ${(props) => props.$size};
  line-height: 1.3em;
  color: ${(props) => props.$color};
`;
