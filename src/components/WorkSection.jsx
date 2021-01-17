/** @jsx jsx */
import { Box, jsx, Link, Heading, Text } from 'theme-ui';
import Stack from './Section';

const ListItem = ({ title, link, date, content }) => (
  <li sx={{ mb: 4 }}>
    <Heading as="h3" sx={{ m: 0 }}>
      <Link href={link} target="_blank" rel="noopener noreferrer">
        {title}
      </Link>
    </Heading>
    <small>{date}</small>
    <Box sx={{ mt: 4 }}>{content}</Box>
  </li>
);

const WorkSection = () => (
  <Stack>
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
    <ul sx={{ listStyle: 'none', m: 0, px: [2, null, 4], py: 4 }}>
      <ListItem
        link="https://teachwithkoala.com"
        title="Koala"
        date="April 2020 to Present"
        content={
          <Text sx={{ mb: 8 }}>
            Koala is a 3D, collaborative, virtual classroom application
            transitioned from Einstein Studios&apos; original virtual reality
            product (see below). I work together with the CTO on the main Unity
            application supported on Mac, Windows and web, while owning the
            supporting web and Electron apps that handle software patching, user
            management, and application launching. Over 300 rooms and growing
            are being hosted in Koala per week.
          </Text>
        }
      />
      <ListItem
        link="https://app.einsteinstudios.io"
        title="Einstein Studios Web Platform"
        date="September 2019 to April 2020"
        content={
          <Text>
            When I joined the team, Einstein Studios offered a virtual reality
            application where we connected children with Spanish and reading
            tutors. I came on in an independent role to build parent, tutor, and
            administrator web platforms managing user onboarding, tutor-student
            recurrent scheduling, and subscription processing. The application
            reached up to ~300 users before the company shifted efforts to Koala
            (see above).
          </Text>
        }
      />
    </ul>
    <Text>
      Visit my{' '}
      <Link
        href="https://github.com/bdbaraban"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </Link>{' '}
      for a more technical portfolio.
    </Text>
  </Stack>
);

export default WorkSection;
