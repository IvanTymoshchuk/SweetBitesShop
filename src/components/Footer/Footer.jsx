import { SvgIcon } from 'components/Svg/Svg';
import {
  Wraper,
  Container,
  WraperLogo,
  Logo,
  Span,
  WraperList,
  WraperItems,
  Items,
  Link,
  WraperItemsSec,
  ItemsSec,
  SpanCopyRight,
} from './Footer.styled';

export const Footer = () => {
  return (
    <Wraper>
      <Container>
      <WraperLogo>
        <Logo>
          Sweet
          <SvgIcon iconId="icon-logo" width="43" height="43"/>
          <br />
          <Span>BitesShop</Span>
        </Logo>
      </WraperLogo>
      <WraperList>
        <WraperItems>
          <Items>
            <Link to="/about">About us</Link>
          </Items>
          <Items>
            <Link to="/shop">Shop</Link>
          </Items>
          <Items>
            <Link href="#">Bestsellers</Link>
          </Items>
        </WraperItems>

        <WraperItemsSec>
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
        </WraperItemsSec>
      </WraperList>
      </Container>

      <SpanCopyRight>
        &#169; 2023 Sweet Bites Shop All rights reserved.
      </SpanCopyRight>
    </Wraper>
  );
};
