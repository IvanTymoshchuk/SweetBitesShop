import { SvgIcon } from 'components/Svg/Svg';
import {
  Wraper,
  WraperItems,
  Logo,
  Span,
  Link,
  WraperList,
  Items,
  WrapCopy,
  SpanCopyRight,
} from './Footer.styled';

export const Footer = () => {
  return (
    <Wraper>
      <WraperItems>
        <Logo>
          Sweet
          <SvgIcon iconId="icon-logo" />
          <br />
          <Span>BitesShop</Span>
        </Logo>
        <WraperList>
          <Items>
            <Link to="/about">About us</Link>
          </Items>
          <Items>
            <Link to="/shop">Shop</Link>
          </Items>
          <Items>
            <Link href="#">Bestsellers</Link>
          </Items>
        </WraperList>
        <WraperList>
          <Items>
            <Link to="https://www.instagram.com/" target="_blanck">
              Instagram
            </Link>
          </Items>
          <Items>
            <Link to="https://www.facebook.com/" target="_blanck">
              Facebook
            </Link>
          </Items>
          <Items>
            <Link to="https://twitter.com/" target="_blanck">
              Twitter
            </Link>
          </Items>
        </WraperList>
      </WraperItems>
      <WrapCopy>
        <SpanCopyRight>
          &#169; 2023 Sweet Bites Shop All rights reserved.
        </SpanCopyRight>
      </WrapCopy>
    </Wraper>
  );
};
