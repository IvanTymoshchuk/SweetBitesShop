import React from "react";
import { Wraper, Title, Button, Img, Span } from "./Hero.styled";
import sprite from "../../img/symbol-defs.svg";
import { Advantages } from "../Advantages/Advantages";

export const Hero = () => {
  return (
    <>
      <Wraper>
        <Title>
          Cakes for any <br />
          taste
        </Title>
        <Img />

        <Button type="submit">
          <Span>Buy Now</Span>
          <svg width="28" height="28">
            <use href={sprite + `#icon-arrow`}></use>
          </svg>
        </Button>
      </Wraper>
      <Advantages />
    </>
  );
};
