import styled from '@emotion/styled';
import { mq, colors } from '../../../utils';

export const Wraper = styled.div`
  padding: 61px 58px 62px 57px;
  background-color: ${colors.backgroundHeader};
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
  /* display: flex; */

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

export const Title = styled.h2`
  margin-top: 15px;
  color: ${colors.primary};
  font-size: 28px;
  text-transform: uppercase;
`;
export const Span = styled.span`
  color: ${colors.primary};
  font-size: 25px;
  text-transform: uppercase;
`;
