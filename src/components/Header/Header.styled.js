import styled from '@emotion/styled';
import { mq, colors, hovers, display } from '../../utils';
import { NavLink } from 'react-router-dom';

export const HeaderW = styled.header`
  background: ${props =>
    props.bgHome ? colors.backgroundHeader : colors.noise};
`;

export const Wraper = styled.div`
  ${display.flex}
  justify-content: space-between;
  padding: 43px 30px 0 30px;

  ${mq.tablet} {
    padding-top: 32px;
  }
  ${mq.desktop} {
    padding: 32px 80px 0 80px;
  }
`;

export const Image = styled.img`
  width: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const HeaderLogo = styled(NavLink)`
  font-size: 12px;
  color: ${props => (props.colorHome ? colors.white : colors.pink1)};
  svg {
    stroke: ${props => (props.colorHome ? colors.white : colors.pink1)};
  }
  ${hovers}

  ${mq.mobile} {
    font-size: 36px;
  }
  ${mq.desktop} {
    font-size: 40px;
  }
`;

export const Nav = styled.nav`
  ${mq.maxDesktop} {
    position: fixed;
    top: 0px;
    right: -100%;
    background-color: ${colors.bg};
    width: 100%;
    height: 100vh;
    z-index: 100;
    transition: 0.5s;

    &.show {
      right: 0;
      display: flex;
      justify-content: center;
    }
  }
`;

export const NavList = styled.ul`
  ${display.flex}
  flex-direction: column;

  ${mq.desktop} {
    flex-direction: row;
    gap: 160px;
  }
  ${mq.maxDesktop} {
    padding-top: 214px;
    gap: 50px;
  }
`;

export const NavItem = styled.li`
  list-style: none;
`;

export const NavBtn = styled(NavLink)`
  font-family: Gabarito;
  color: ${props => (props.colorHome ? colors.primary : colors.pink1)};
  font-size: 50px;
  ${hovers}

  ${mq.desktop} {
    color: ${props => (props.colorHome ? colors.white : colors.pink1)};
    font-size: 28px;
  }

  @media screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  font-size: 24px;
  top: 18px;
  right: 24px;
  display: block;
  color: ${colors.white};
  ${hovers}

  cursor: pointer;
  ${mq.desktop} {
    display: none;
  }
`;

export const ToggleButton = styled.button`
  color: ${colors.white};
  display: none;
  font-size: 24px;
  ${hovers}

  ${mq.maxDesktop} {
    display: inline;
  }
`;
export const SecondList = styled.ul`
  ${display.flex}
  gap: 20px;
`;

export const NavSocial = styled.ul`
  display: flex;
  gap: 14px;
  ${mq.desktop} {
    display: none;
  }
`;

export const LinkSoc = styled(NavLink)`
  color: #d86090;
  font-size: 24px;
  text-transform: capitalize;
`;

export const WrapContModal = styled.div`
  ${mq.maxDesktop} {
    ${display.flexSpace}
    flex-direction: column;
    padding-bottom: 50px;
  }
`;

export const Btn = styled.button`
  color: ${props => (props.colorHome ? '#ffffff' : colors.pink1)};
`;

export const BtnLink = styled(NavLink)`
  color: ${props => (props.colorHome ? '#ffffff' : colors.pink1)};
`;

export const Span = styled.span``;
export const SecondItem = styled.li``;
export const NavSocialItems = styled.li``;
