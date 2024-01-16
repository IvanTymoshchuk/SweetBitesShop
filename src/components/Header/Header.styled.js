import styled from '@emotion/styled';
import { mq, colors } from '../../utils';
import { NavLink } from 'react-router-dom';

export const HeaderW = styled.header`
  background-color: ${colors.backgroundHeader};
  padding-bottom: 27px;

  ${mq.desktop} {
    padding-bottom: 77px;
  }
`;

export const Wraper = styled.div`
  padding: 43px 30px 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const HeaderLogo = styled.a`
  font-size: 12px;
  color: ${colors.white};

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
    background-color: ${colors.modal};
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
  display: flex;
  flex-direction: column;
  align-items: center;
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

  color: ${colors.primary};
  font-size: 50px;

  ${mq.desktop} {
    color: ${colors.white};
    font-size: 28px;
    &:hover,
    &:focus {
      background-color: ${colors.pimkLight};
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }
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
  color: white;
  background-color: transparent;
  border: none;

  cursor: pointer;
  ${mq.desktop} {
    display: none;
  }

  &:hover {
    background-color: red;
  }
`;

export const ToggleButton = styled.button`
  background-color: transparent;
  color: ${colors.white};
  display: none;
  font-size: 24px;
  cursor: pointer;
  border: none;

  ${mq.maxDesktop} {
    display: inline;
  }
`;
export const SecondList = styled.ul`
  display: flex;
  align-items: center;
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 50px;
  }
`;

export const Span = styled.span``;
export const Btn = styled.button``;
export const SecondItem = styled.li``;
export const NavSocialItems = styled.li``;
