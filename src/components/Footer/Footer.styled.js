import styled from '@emotion/styled';
import { mq, colors } from '../../utils';
import { NavLink } from 'react-router-dom';

export const Wraper = styled.footer`
  padding: 70px 130px 50px 40px;
  background-color: ${colors.backgroundHeader};
  ${mq.tablet} {
    padding: 70px 46px 50px 30px;
  }
  ${mq.desktop} {
    padding: 80px 248px 36px 80px;
  }
`;

export const WraperItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Logo = styled.a`
  color: #fcf3f6;
  font-family: Gabarito;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 84px;
`;
export const WraperList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Link = styled(NavLink)`
  color: #fcf3f6;
`;

export const WrapCopy = styled.div`
  display: flex;
`;

export const Items = styled.li`
  font-family: Gabarito;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
`;

export const SpanCopyRight = styled.span`
  color: #fcf3f6;
  font-family: Gabarito;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
`;
export const Span = styled.span``;
