import styled from "@emotion/styled";
import background from "../../img/background.jpg";
import { mq, colors } from "../../utils";

export const HeaderW = styled.header`
  background-color: ${colors.backgroundHeader};
  padding-bottom: 27px;

  ${mq.tablet} {
    padding-bottom: 78px;
  }
`;

export const Wraper = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 43px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mq.tablet} {
    justify-content: space-between;
    padding-top: 32px;
    align-items: center;
  }
  ${mq.desktop} {
    padding-left: 80px;
    padding-right: 80px;
  }
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const HeaderLogo = styled.a`
  text-decoration: none;
  color: ${colors.white};
  font-size: 34px;
  cursor: pointer;

  ${mq.tablet} {
    font-size: 24px;
  }
`;

export const Span = styled.span``;

export const Nav = styled.nav`
  ${mq.maxDesktop} {
    position: fixed;
    top: 0px;
    right: -100%;
    background-image: url(${background});
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

export const NavLink = styled.button`
  font-family: Gabarito;
  background-color: transparent;
  color: ${colors.primary};
  font-size: 50px;
  border: none;
  cursor: pointer;
  ${mq.desktop} {
    color: ${colors.white};
    font-size: 20px;
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

export const SecondItem = styled.li``;

export const NavSocial = styled.ul`
  display: flex;
  gap: 14px;
  ${mq.desktop} {
    display: none;
  }
`;

export const Inst = styled.li``;
export const Facebook = styled.li``;
export const Twiter = styled.li``;
export const LinkSoc = styled.a`
  color: #d86090;
  font-size: 24px;
  text-transform: capitalize;
`;

export const WrapContModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 50px;
`;
