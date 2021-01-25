/** @jsx jsx */
import { jsx, Link, Text } from 'theme-ui';
import {
  TiSocialLinkedin,
  TiMail,
  TiSocialGithub,
  TiSocialAtCircular,
} from 'react-icons/ti';
import Section from './Section';

const ContactSection = () => (
  <Section>
    <Text>I would love to talk with you!</Text>
    <Text>
      <TiMail
        sx={{ width: '1.25em', height: '1.25em', verticalAlign: 'sub' }}
      />{' '}
      I am best reached directly by email at{' '}
      <Link href="mailto:brennan@bdov.dev">brennan@bdov.dev.</Link>
    </Text>
    <Text>
      <TiSocialLinkedin
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
      <TiSocialGithub
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
      <TiSocialAtCircular
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
      , although I am not active on these platforms.
    </Text>
  </Section>
);

export default ContactSection;
