/** @jsxImportSource theme-ui */
import Emoji from 'a11y-react-emoji';
import React from 'react';
import { Link, Text } from 'theme-ui';
import Article from './building-blocks/Article';
import Content from './building-blocks/Content';
import Section from './building-blocks/Section';

const updatedAt = new Date('2022-05-20T08:00:00.000Z');

const CareerSection = () => (
  <Section updatedAt={updatedAt}>
    <Content sx={{ gap: 8 }}>
      <Article
        icon={<Emoji symbol="‍👩‍🍳" label="woman cook" />}
        title="Shef"
        subtitle="April 2021 to Present"
      >
        <Text>
          I am currently a full-stack engineer at{' '}
          <Link
            href="https://shef.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shef (YC W19)
          </Link>
          , building our consumer web experience, chef onboarding and supply
          platform, internal administrator tooling, and everything in-between.
        </Text>
      </Article>

      <Article
        icon={<Emoji symbol="🐨" label="koala" />}
        title="Einstein Studios"
        subtitle="September 2019 to March 2021"
      >
        <Text>
          I was the second and lead engineer at{' '}
          <Link
            href="https://teachwithkoala.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Einstein Studios (YC W22)
          </Link>
          , where I built Koala, a 3D collaborative classroom application for
          independent tutors. I launched parent, tutor, and administrator web
          platforms for our Oculus VR Spanish and reading tutoring application,
          and worked together with the CTO on the primary Unity and Electron
          products supported on Mac, Windows, and WebGL.
        </Text>
      </Article>

      <Article
        icon={<Emoji symbol="🌁" label="bridge under fog" />}
        title="Holberton School"
        subtitle="September 2018 to June 2019"
      >
        <Text>
          I studied software engineering at{' '}
          <Link
            href="https://holbertonschool.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Holberton School
          </Link>
          , San Francisco, where I completed the nine-month computer science,
          programming and full-stack web development curriculum.
        </Text>
      </Article>

      <Article
        icon={<Emoji symbol="🐄" label="cow" />}
        title="UC Davis"
        subtitle="September 2015 to June 2018"
      >
        <Text>
          I attended the University of California, Davis as an undergraduate,
          where I received a B.A. in{' '}
          <Link
            href="https://americanstudies.ucdavis.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            American Studies
          </Link>
          , an interdisciplinary field in the humanities that studies the
          construction of American culture. I additionally completed a double
          minor in Statistics and Economics.
        </Text>
      </Article>
    </Content>
  </Section>
);

export default CareerSection;
