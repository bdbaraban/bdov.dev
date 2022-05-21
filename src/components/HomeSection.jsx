/** @jsxImportSource theme-ui */
import Emoji from 'a11y-react-emoji';
import React from 'react';
import { Image, Text } from 'theme-ui';
import Content from './building-blocks/Content';
import Section from './building-blocks/Section';

const updatedAt = new Date('2022-05-20T08:00:00.000Z');

const HomeSection = () => (
  <Section updatedAt={updatedAt}>
    <Content>
      <Text>
        Wow, hello! Thank you for visiting my domain.{' '}
        <Emoji symbol="🗻" label="mount fuji" />
      </Text>
      <Text>
        I know not what brings you here - maybe you are a lost acquaintance
        perusing my online profile; perchance you are a recruiter I like to
        imagine were led here via my job portfolio; more likely, you are a bot,
        scraping for that juicy, personal data - regardless, welcome.
      </Text>
      <Text>
        This site is a simple space, but my own; take your time clicking around,
        and please do reach out!
      </Text>
      <Text>- Brennan</Text>
      <Image
        src="/take-your-time.gif"
        alt="Persona 5 Take Your Time gif"
        sx={{ width: '10em', height: '10em', objectFit: 'cover' }}
      />
    </Content>
  </Section>
);

export default HomeSection;
