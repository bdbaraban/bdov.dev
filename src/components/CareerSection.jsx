/** @jsx jsx */
import React from 'react';
import { Box, jsx, Link, Heading, Text } from 'theme-ui';
import Emoji from 'a11y-react-emoji';
import Section from './Section';

const Article = ({ title, date, emoji, children }) => (
  <article sx={{ display: 'grid', gridGap: 4 }}>
    <Box>
      <Heading as="h2">
        {emoji} {title}
      </Heading>
      <small>{date}</small>
    </Box>
    {children}
  </article>
);

const List = ({ listItems }) => (
  <ul sx={{ listStyle: 'none', m: 0, px: [2, null, 4] }}>
    {listItems.map((listItem, index) => (
      <ListItem
        key={listItem.title}
        {...listItem}
        contentProps={
          index !== listItems.length - 1 ? { sx: { mb: 4 } } : undefined
        }
      />
    ))}
  </ul>
);

const ListItem = ({ title, link, content, contentProps }) => (
  <li sx={{ mb: 2 }}>
    <Heading as="h3" sx={{ m: 0 }}>
      <Link href={link} target="_blank" rel="noopener noreferrer">
        {title}
      </Link>
    </Heading>
    <Box sx={{ mt: 2 }}>
      <Text {...contentProps}>{content}</Text>
    </Box>
  </li>
);

const CareerSection = () => (
  <Section sx={{ gridGap: 8 }}>
    <Article
      title="Einstein Studios"
      date="September 2019 to Present"
      emoji={<Emoji symbol="🐨" label="koala" />}
    >
      <Text>
        I am the Lead Software Engineer at{' '}
        <Link
          href="https://www.linkedin.com/company/einstein-studios/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Einstein Studios
        </Link>
        . Notable projects include:
      </Text>
      <List
        listItems={[
          {
            link: 'https://teachwithkoala.com',
            title: 'Koala 3D Virtual Classroom',
            date: 'April 2020 to Present',
            content: (
              <React.Fragment>
                Koala is a collaborative classroom application transitioned from
                Einstein Studios&apos; original virtual reality product (read
                below). I work together with the CTO on the main Unity
                application supported on Mac, Windows, and web while owning the
                web and Electron projects that handle software patching, user
                management, and application launching. Over ~400 rooms are being
                hosted in Koala per week, and we are actively growing!
              </React.Fragment>
            ),
          },
          {
            link: 'https://app.einsteinstudios.io',
            title: 'Tutoring Web Platforms',
            date: 'September 2019 to April 2020',
            content: (
              <React.Fragment>
                When I joined the team, Einstein Studios offered a virtual
                reality application where we connected children with Spanish and
                reading tutors. I started in an independent role to build
                parent, tutor, and administrator web platforms managing user
                onboarding, tutor-student recurring scheduling, and payments
                processing. The application reached up to ~300 users before the
                company shifted efforts to Koala (read above).
              </React.Fragment>
            ),
          },
        ]}
      />
    </Article>

    <Article
      title="Holberton School"
      date="September 2018 to June 2019"
      emoji={<Emoji symbol="🌁" label="bridge under fog" />}
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
        , San Francisco. I completed the nine-month computer science,
        programming and full-stack web development curriculum.
      </Text>
      <Text>
        I like to consider Holberton the fourth year of school that I bypassed
        in college (read below). In my senior year at UC Davis, partially on a
        whim, but more accurately the fortunate result of my having space in my
        schedule and the initiative to try something I had always thought
        intriguing, I took Intro to Programming. I was hooked, and I determined
        to pursue a career in software engineering without restarting a degree.
        By the time I graduated, I had accepted my admittance to Holberton.
      </Text>
    </Article>

    <Article
      title="UC Davis"
      date="September 2015 to June 2018"
      emoji={<Emoji symbol="🐄" label="cow" />}
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
        minor in Statistics and Economics.{' '}
      </Text>
      <Text>
        Some fun facts about my time at Davis: I graduated in three years,
        worked as a resident advisor for two, studied abroad in Peru the summer
        between the second and third (hence my joy for llamas and the
        inspiration for this site&apos;s favicon), and received an award for my
        thesis on college athletics in the last.
      </Text>
    </Article>
  </Section>
);

export default CareerSection;
