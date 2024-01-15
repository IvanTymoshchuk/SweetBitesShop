import styled from '@emotion/styled';
import { mq, colors } from '../../utils';

export const Wraper = styled.section`
  padding-left: 30px;
  padding-right: 30px;

  background-color: ${colors.pimkLight};
  ${mq.tablet} {
    padding-left: 80px;
    padding-right: 80px;
  }
`;

export const Title = styled.h2`
  color: ${colors.primary};
  font-size: 45px;
  padding: 70px 0 25px;
  text-transform: uppercase;
  ${mq.desktop} {
    font-size: 75px;
    padding: 90px 0 30px;
  }
`;
