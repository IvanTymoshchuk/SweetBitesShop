import styled from '@emotion/styled';
import { mq, colors } from '../../utils';

export const Title = styled.h2`
  color: ${colors.primary};
  font-size: 45px;
  margin-bottom: 25px;
  text-transform: uppercase;
  ${mq.desktop} {
    font-size: 75px;
    margin-bottom: 35px;
  }
`;