import React from "react";
import about from "../../img/about.png";
import {
  Section,
  Wraper,
  WrapImg,
  WrapText,
  Img,
  Title,
  Descr,
} from "./About.styled";

export const About = () => {
  return (
    <Section>
      <Wraper>
        <WrapImg>
          <Img src={about} alt="about-img" />
        </WrapImg>
        <WrapText>
          <Title>about us</Title>
          <Descr>
            Welcome to Sweet Bites Shop, where we turn moments into memories
            through the art of baking.our passion for crafting delicious and
            visually stunning cakes sets us apart. From sourcing the finest
            ingredients to creating personalized designs, we're dedicated to
            making your celebrations extraordinary. explore our menu, savor the
            sweetness, and let Sweet Bites Shop be a part of your joyous
            occasions.
          </Descr>
        </WrapText>
      </Wraper>
    </Section>
  );
};
