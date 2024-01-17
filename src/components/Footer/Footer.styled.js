import styled from '@emotion/styled';
import { mq, colors, hovers, display } from '../../utils';
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
    ${display.flexSpace}
    align-items: baseline;
    margin-bottom: 77px;
  }
`;
export const WraperLogo = styled.div`
  margin-bottom: 40px;
`;

export const Logo = styled(NavLink)`
  color: ${colors.white};
  font-size: 40px;
  font-weight: 600;
  ${hovers}
`;

export const Span = styled.span``;

export const WraperList = styled.div`
  display: flex;
  ${mq.maxTablet} {
    justify-content: space-between;
    margin-bottom: 50px;
  }
`;

const ulFlex = `
display : flex;
flex-direction: column;
gap:14px;
`;

export const WraperItems = styled.ul`
  ${ulFlex}
  ${mq.desktop} {
    margin-right: 428px;
  }
`;
export const Items = styled.li``;

export const WraperItemsSec = styled.ul`
  ${ulFlex}
`;

export const ItemsSec = styled.li``;

export const Link = styled(NavLink)`
  color: ${colors.white};
  font-size: 24px;
  text-transform: capitalize;
  ${hovers}
`;

export const SpanCopyRight = styled.span`
  color: ${colors.white};
  font-size: 16px;
  text-transform: capitalize;
`;
