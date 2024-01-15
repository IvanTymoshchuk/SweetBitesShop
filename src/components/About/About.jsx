import React from 'react';
import about from '../../img/about/about-mob.png';
import {
  Section,
  Wraper,
  WrapImg,
  WrapText,
  Img,
  Title,
  Descr,
} from './About.styled';
import { Text } from './Text/Text';

export const About = () => {
  return (
    <Section>
      <Wraper>
        <WrapImg>
          <Img src={about} alt="about-img" />
        </WrapImg>
        <WrapText>
          <Title>about us</Title>
          <Text />
        </WrapText>
      </Wraper>
    </Section>
  );
};
