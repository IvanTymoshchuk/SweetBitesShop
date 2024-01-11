import React from "react";
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
} from "./Footer.styled";
import sprite from "../../img/symbol-defs.svg";

export const Footer = () => {
  return (
    <Wraper>
      <WraperItems>
        <Logo>
          Sweet
          <svg width="43" height="43">
            <use href={sprite + `#icon-logo`}></use>
          </svg>
          <br />
          <Span>BitesShop</Span>
        </Logo>
        <WraperList>
          <Items>
            <Link href="#">About us</Link>
          </Items>
          <Items>
            <Link href="#">Shop</Link>
          </Items>
          <Items>
            <Link href="#">Bestsellers</Link>
          </Items>
        </WraperList>
        <WraperList>
          <Items>
            <Link href="#">Instagram</Link>
          </Items>
          <Items>
            <Link href="#">Facebook</Link>
          </Items>
          <Items>
            <Link href="#">Twitter</Link>
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
