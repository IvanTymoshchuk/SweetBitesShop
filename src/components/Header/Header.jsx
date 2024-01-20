import { useState } from 'react';
import { SvgIcon } from 'components/Svg/Svg';
import {
  HeaderW,
  Wraper,
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
import { useLocation } from 'react-router-dom';
import { colors } from '../../utils';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  console.log(location.pathname)

  return (
    <HeaderW bgHome={location.pathname === '/'}>
      <Wraper>
        <HeaderLogo colorHome={location.pathname === '/'}>
          Sweet <SvgIcon iconId="icon-logo" width="39" height="39" />
          <br />
          <Span>BitesShop</Span>
        </HeaderLogo>

        <Nav id="nav-menu" className={isMenuOpen ? 'show' : ''}>
          <CloseButton onClick={toggleMenu}>
            <SvgIcon iconId="icon-close" width="30" height="30" />
          </CloseButton>

          <WrapContModal>
            <NavList>
              <NavItem>
                <NavBtn colorHome={location.pathname === '/'} to="/home">Home</NavBtn>
              </NavItem>
              <NavItem>
                <NavBtn colorHome={location.pathname === '/'} to="/about">About</NavBtn>
              </NavItem>
              <NavItem>
                <NavBtn colorHome={location.pathname === '/'} to="/shop">Shop</NavBtn>
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
            <Btn colorHome={location.pathname === '/'}>
              <SvgIcon iconId="icon-serch" width="30" height="30" />
            </Btn>
          </SecondItem>

          <SecondItem>
            <Btn colorHome={location.pathname === '/'}>
              <SvgIcon iconId="icon-user" width="30" height="30" />
            </Btn>
          </SecondItem>

          <SecondItem>
            <Btn colorHome={location.pathname === '/'}>
              <SvgIcon iconId="icon-basket" width="30" height="30" />
            </Btn>
          </SecondItem>

          <ToggleButton onClick={toggleMenu}>
            <SvgIcon iconId="icon-menu" width="36" height="30" />
          </ToggleButton>
        </SecondList>
      </Wraper>
    </HeaderW>
  );
};
