import styled from '@emotion/styled';
import { mq, colors } from '../../utils';
import { NavLink } from 'react-router-dom';

export const Wraper = styled.footer`
  padding: 70px 46px 50px 30px;
  background-color: ${colors.backgroundHeader};
  ${mq.tablet} {
    padding: 70px 130px 50px 40px;
  }
  ${mq.desktop} {
    padding: 80px 248px 36px 80px;
  }
`;

export const Container = styled.div`
  ${mq.desktop} {
    display: flex;
    justify-content: space-between;
  }
`;
export const WraperItems = styled.div`
  margin-bottom: 40px;
`;

export const Logo = styled.a`
  color: ${colors.white};
  font-size: 40px;
  font-weight: 600;
`;

export const Span = styled.span``;

export const WraperSec = styled.div`
  display: flex;
  ${mq.maxTablet} {
    justify-content: space-between;
    margin-bottom: 50px;
  }
`;

export const WraperList = styled.ul`
  ${mq.desktop} {
    margin-right: 428px;
  }
`;
export const Items = styled.li``;

export const WraperListSec = styled.ul``;
export const ItemsSec = styled.li``;

export const Link = styled(NavLink)`
  color: ${colors.white};
  font-size: 24px;
  text-transform: capitalize;
`;

export const SpanCopyRight = styled.span`
  color: ${colors.white};
  font-size: 16px;
  text-transform: capitalize;
`;
