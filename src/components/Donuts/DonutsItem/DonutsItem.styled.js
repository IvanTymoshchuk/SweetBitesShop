import styled from '@emotion/styled';
import { mq, colors } from '../../../utils';

export const Wraper = styled.div`
  padding: 61px 58px 62px 57px;
  border-radius: 39px;
  background-color: ${colors.bgDonuts};
  ${mq.desktop} {
    padding: 53px 45px;
  }
`;
export const Img = styled.img`
  ${mq.desktop} {
    height: 307px;
  }
`;
export const List = styled.ul`
  ${mq.maxMobile} {
    flex-direction: column;
  }
  ${mq.tablet} {
    justify-content: space-between;
  }
`;
export const Items = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Span = styled.span`
  color: ${colors.primary};
  font-size: 25px;
  text-transform: uppercase;
`;
