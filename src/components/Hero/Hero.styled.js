import styled from '@emotion/styled';
import { mq, colors } from '../../utils';
import hero from '../../img/hero/hero-mob.png';
import hero2 from '../../img/hero/hero-tabl.png';
import hero3 from '../../img/hero/hero-desk.png';

export const Wraper = styled.section`
  padding-left: 30px;
  padding-bottom: 35px;
  background-color: ${colors.backgroundHeader};
  ${mq.tablet} {
    padding-left: 40px;
    padding-right: 30px;
  }
  ${mq.desktop} {
    padding-left: 80px;
    padding-right: 80px;
    padding-bottom: 75px;
  }
`;
export const Title = styled.h1`
  font-size: 30px;
  top: 315px;
  position: absolute;
  color: ${colors.white};

  text-transform: uppercase;
  ${mq.mobile} {
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
  width: 135px;
  height: 45px;
  gap: 5px;
  border-radius: 30px;
  top: 405px;
  display: flex;
  justify-content: center;
  align-items: center;
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
    background-image: url(${hero2});
    margin-left: auto;
    width: 519px;
    height: 491px;
  }

  ${mq.desktop} {
    background-image: url(${hero3});
    margin-left: auto;
    width: 762px;
    height: 709px;
  }
`;
