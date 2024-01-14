import styled from '@emotion/styled';
import { mq, colors } from '../../utils';
import about from '../../img/about/about-mob.png';
import aboutTab from '../../img/about/about-tab.png';
import aboutDesk from '../../img/about/about-desk.png';

export const Section = styled.section`
  padding-left: 30px;
  padding-right: 30px;
  background-color: ${colors.pimkLight};
  ${mq.tablet} {
    padding: 90px 80px;
  }
`;
export const WrapImg = styled.div``;

export const Img = styled.img`
  background-image: url(${about});
  ${mq.tablet} {
    background-image: url(${aboutTab});
  }
  ${mq.desktop} {
    background-image: url(${aboutDesk});
  }
`;
export const Title = styled.h2`
  color: ${colors.primary};
  font-size: 45px;
  text-transform: uppercase;
  margin-bottom: 35px;
  ${mq.desktop} {
    font-size: 75px;
  }
`;
export const Descr = styled.p`
  width: 420px;
  color: ${colors.primary};
  font-size: 24px;

  ${mq.tablet} {
    width: 634px;
  }
  ${mq.desktop} {
    width: 738px;
    font-size: 26px;
  }
`;
export const Wraper = styled.div`
  display: flex;
  justify-content: space-between;
  ${mq.maxTablet} {
    flex-direction: column;
  }
`;
export const WrapText = styled.div``;
