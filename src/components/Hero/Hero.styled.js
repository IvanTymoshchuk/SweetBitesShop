import styled from '@emotion/styled';
import { mq, colors, display } from '../../utils';
import hero from '../../img/hero/hero-mob.png';
import hero2 from '../../img/hero/hero-tabl.png';
import hero3 from '../../img/hero/hero-desk.png';

export const Wraper = styled.section`
  padding: 0 0 35px 30px;
  background-color: ${colors.backgroundHeader};
  ${mq.tablet} {
    padding: 0 30px 35px 40px;
  }
  ${mq.desktop} {
    padding: 0 80px 75px 80px;
  }
`;
export const Title = styled.h1`
  position: absolute;
  color: ${colors.white};
  top: 315px;
  font-size: 30px;
  text-transform: uppercase;
  ${mq.mobilePlus} {
    top: 290px;
    font-size: 50px;
  }
  ${mq.tablet} {
    top: 257px;
  }
  ${mq.desktop} {
    top: 330px;
    font-size: 85px;
  }
`;
export const Button = styled.button`
  position: absolute;
  ${display.flexJust}
  width: 135px;
  height: 45px;
  top: 405px;
  gap: 5px;
  border-radius: 30px;
  border: 4px solid #fcf3f6;
  ${mq.mobile} {
    width: 223px;
    height: 76px;
    border-radius: 70px;
    gap: 10px;
  }
  ${mq.desktop} {
    top: 587px;
  }
`;
export const Span = styled.span`
  color: ${colors.white};
  font-family: Gabarito;
  font-size: 20px;
  ${mq.mobile} {
    font-size: 28px;
  }
`;

export const Img = styled.div`
  margin-left: 30px;
  height: 491px;
  background-image: url(${hero});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  @media (min-width: 500px) {
    max-width: 762px;
    margin-left: auto;
    background-image: url(${hero2});
  }

  ${mq.desktop} {
    height: 709px;
    background-image: url(${hero3});
  }
`;
