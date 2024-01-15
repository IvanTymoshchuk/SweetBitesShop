import { useState } from 'react';
import { SvgIcon } from 'components/Svg/Svg';
import {
  HeaderW,
  Wraper,
  Logo,
  HeaderLogo,
  Span,
  Nav,
  NavList,
  NavItem,
  NavBtn,
  SecondList,
  SecondItem,
  Btn,
  CloseButton,
  ToggleButton,
  NavSocial,
  NavSocialItems,
  WrapContModal,
  LinkSoc,
} from './Header.styled';


export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderW>
      <Wraper>
        <Logo>
          <HeaderLogo to="/">
            Sweet <SvgIcon iconId="icon-logo" />
            <br />
            <Span>BitesShop</Span>
          </HeaderLogo>
        </Logo>

        <Nav id="nav-menu" className={isMenuOpen ? 'show' : ''}>
          <CloseButton onClick={toggleMenu}>
            <SvgIcon iconId="icon-close" />
          </CloseButton>

          <WrapContModal>
            <NavList>
              <NavItem>
                <NavBtn to="/">Home</NavBtn>
              </NavItem>
              <NavItem>
                <NavBtn to="/about">About</NavBtn>
              </NavItem>
              <NavItem>
                <NavBtn to="/shop">Shop</NavBtn>
              </NavItem>
            </NavList>

            <NavSocial>
              <NavSocialItems>
                {' '}
                <LinkSoc to="https://www.instagram.com/" target="_blanck">
                  Instagram
                </LinkSoc>
              </NavSocialItems>
              <NavSocialItems>
                {' '}
                <LinkSoc to="https://www.facebook.com/" target="_blanck">
                  Facebook
                </LinkSoc>
              </NavSocialItems>
              <NavSocialItems>
                {' '}
                <LinkSoc to="https://twitter.com/" target="_blanck">
                  Twitter
                </LinkSoc>
              </NavSocialItems>
            </NavSocial>
          </WrapContModal>
        </Nav>

        <SecondList>
          <SecondItem>
            <Btn>
              <SvgIcon iconId="icon-serch" />
            </Btn>
          </SecondItem>

          <SecondItem>
            <Btn>
              <SvgIcon iconId="icon-user" />
            </Btn>
          </SecondItem>

          <SecondItem>
            <Btn>
              <SvgIcon iconId="icon-basket" />
            </Btn>
          </SecondItem>

          <ToggleButton onClick={toggleMenu}>
            <SvgIcon iconId="icon-menu" />
          </ToggleButton>
        </SecondList>
      </Wraper>
    </HeaderW>
  );
};
