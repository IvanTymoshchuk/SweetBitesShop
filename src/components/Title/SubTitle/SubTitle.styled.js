import styled from '@emotion/styled';
import { mq, colors } from '../../../utils';

export const SubTitle = styled.h3`
  margin-top: 15px;
  color: ${colors.primary};
  font-size: 26px;
  text-transform: uppercase;
  ${mq.desktop} {
    font-size: 28px;
  }
`;
