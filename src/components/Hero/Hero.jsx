import React from 'react';
import { Wraper, Title, Button, Img, Span } from './Hero.styled';
import { Advantages } from '../Advantages/Advantages';
import { SvgIcon } from 'components/Svg/Svg';

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
          <SvgIcon iconId="icon-arrow" width="28" height="28" />
        </Button>
      </Wraper>
      <Advantages />
    </>
  );
};
