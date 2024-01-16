import styled from '@emotion/styled';
import { mq, colors } from '../../utils';

export const Wraper = styled.section`
  padding: 70px 30px 0 30px;
  background-color: ${colors.pimkLight};
  ${mq.tablet} {
    padding: 90px 80px 30px;
  }
`;
