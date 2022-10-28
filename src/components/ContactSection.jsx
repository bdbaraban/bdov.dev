/** @jsxImportSource theme-ui */
import React from 'react';
import {
  TbAt,
  TbBrandDiscord,
  TbBrandGithub,
  TbBrandLinkedin,
  TbMail,
} from 'react-icons/tb';
import { Link, Text } from 'theme-ui';
import Content from './building-blocks/Content';
import Section from './building-blocks/Section';

const updatedAt = new Date('2022-10-28T08:00:00.000Z');

const ContactSection = () => (
  <Section updatedAt={updatedAt}>
    <Content>
      <Text>I would love to talk with you!</Text>
      <Text>
        <TbMail
          sx={{ width: '1.25em', height: '1.25em', verticalAlign: 'sub' }}
        />{' '}
        I prefer you reach out by email at{' '}
        <Link href="mailto:brennan@bdov.dev">brennan@bdov.dev.</Link>
      </Text>
      <Text>
        <TbBrandDiscord
          sx={{ width: '1.25em', height: '1.25em', verticalAlign: 'sub' }}
        />{' '}
        Naturally, I&apos;m on Discord every day - you can add me at <Link
          href="https://discord.com/users/bdawg#0015"
          target="_blank"
          rel="noopener noreferrer"
        >bdawg#0015
        </Link>
      </Text>
      <Text>
        <TbBrandLinkedin
          sx={{ width: '1.25em', height: '1.25em', verticalAlign: 'sub' }}
        />{' '}
        Alternatively, feel free to connect with me on{' '}
        <Link
          href="https://www.linkedin.com/in/bdbaraban"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Link>
        .
      </Text>
      <Text>
        <TbBrandGithub
          sx={{ width: '1.25em', height: '1.25em', verticalAlign: 'sub' }}
        />{' '}
        For a more technical portfolio, visit my{' '}
        <Link
          href="https://github.com/bdbaraban"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>
        .
      </Text>
      <Text>
        <TbAt
          sx={{ width: '1.25em', height: '1.25em', verticalAlign: 'sub' }}
        />{' '}
        You can also follow me on{' '}
        <Link
          href="https://twitter.com/bdov_"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </Link>{' '}
        or add me on{' '}
        <Link
          href="https://www.facebook.com/brennan.baraban"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </Link>
        , although I am not active on social media.
      </Text>
    </Content>
  </Section>
);

export default ContactSection;
