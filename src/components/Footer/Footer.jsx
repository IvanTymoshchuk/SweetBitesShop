import { SvgIcon } from 'components/Svg/Svg';
import {
  Wraper,
  WraperItems,
  Logo,
  Span,
  Link,
  WraperList,
  Items,
  SpanCopyRight,
  WraperListSec,
  ItemsSec,
  WraperSec,
  Container
} from './Footer.styled';

export const Footer = () => {
  return (
    <Wraper>
      <Container>
      <WraperItems>
        <Logo>
          Sweet
          <SvgIcon iconId="icon-logo" />
          <br />
          <Span>BitesShop</Span>
        </Logo>
      </WraperItems>
      <WraperSec>
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

        <WraperListSec>
          <ItemsSec>
            <Link to="https://www.instagram.com/" target="_blanck">
              Instagram
            </Link>
          </ItemsSec>
          <ItemsSec>
            <Link to="https://www.facebook.com/" target="_blanck">
              Facebook
            </Link>
          </ItemsSec>
          <ItemsSec>
            <Link to="https://twitter.com/" target="_blanck">
              Twitter
            </Link>
          </ItemsSec>
        </WraperListSec>
      </WraperSec>
      </Container>

      <SpanCopyRight>
        &#169; 2023 Sweet Bites Shop All rights reserved.
      </SpanCopyRight>
    </Wraper>
  );
};
