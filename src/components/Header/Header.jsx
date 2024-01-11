import React, { useState } from "react";
import sprite from "../../img/symbol-defs.svg";
import { useNavigate } from "react-router-dom";
import {
  HeaderW,
  Wraper,
  Logo,
  HeaderLogo,
  Span,
  Nav,
  NavList,
  NavItem,
  NavLink,
  SecondList,
  SecondItem,
  CloseButton,
  ToggleButton,
  NavSocial,
  Inst,
  Facebook,
  Twiter,
  WrapContModal,
  LinkSoc,
} from "./Header.styled";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = (to) => {
    navigate(to);
    setIsMenuOpen(false);
  };

  return (
    <HeaderW>
      <Wraper>
        
        <Logo>
          <HeaderLogo onClick={() => handleNavLinkClick("/")}>
            Sweet{" "}
            <svg width="20" height="20">
              <use href={sprite + `#icon-logo`}></use>
            </svg>
            <br />
            <Span>BitesShop</Span>
          </HeaderLogo>
        </Logo>

        <Nav id="nav-menu" className={isMenuOpen ? "show" : ""}>
          <CloseButton>
            <svg width="20" height="20" onClick={toggleMenu}>
              <use href={sprite + `#icon-close`}></use>
            </svg>
          </CloseButton>

          <WrapContModal>
            <NavList>
              <NavItem>
                <NavLink onClick={() => handleNavLinkClick("/")}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => handleNavLinkClick("/about")}>
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => handleNavLinkClick("/shop")}>
                  Shop
                </NavLink>
              </NavItem>
            </NavList>

            <NavSocial>
              <Inst>
                {" "}
                <LinkSoc href="">Instagram</LinkSoc>
              </Inst>
              <Facebook>
                {" "}
                <LinkSoc href="">Facebook</LinkSoc>
              </Facebook>
              <Twiter>
                {" "}
                <LinkSoc href="">Twitter</LinkSoc>
              </Twiter>
            </NavSocial>

          </WrapContModal>
        </Nav>

        <SecondList>

          <SecondItem>
            <a href="#">
              <svg width="20" height="20">
                <use href={sprite + `#icon-serch`}></use>
              </svg>
            </a>
          </SecondItem>

          <SecondItem>
            <a href="#">
              <svg width="20" height="20">
                <use href={sprite + `#icon-user`}></use>
              </svg>
            </a>
          </SecondItem>

          <SecondItem>
            <a href="#">
              <svg width="20" height="20">
                <use href={sprite + `#icon-basket`}></use>
              </svg>
            </a>
          </SecondItem>

          <ToggleButton>
            <svg width="20" height="20" onClick={toggleMenu}>
              <use href={sprite + `#icon-menu`}></use>
            </svg>
          </ToggleButton>

        </SecondList>
      </Wraper>
    </HeaderW>
  );
};
