import React from 'react';
import about from '../../img/about/about-mob.png';
import { Section, Wraper, WrapImg, WrapText, Img } from './About.styled';
import { Text } from './Text/Text';
import { Titles } from 'components/Title/Title';

export const About = () => {
  return (
    <Section>
      <Wraper>
        <WrapImg>
          <Img src={about} alt="about-img" />
        </WrapImg>
        <WrapText>
          <Titles text="about us" />
          <Text />
        </WrapText>
      </Wraper>
    </Section>
  );
};
