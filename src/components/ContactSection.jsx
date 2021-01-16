/** @jsx jsx */
import { jsx, Link, Text } from 'theme-ui';
import Stack from './Section';

const ContactSection = () => (
  <Stack>
    <Text>I would love to talk with you!</Text>
    <Text>
      I am best reached directly by email at{' '}
      <Link href="mailto:brennan@bdov.dev">brennan@bdov.dev.</Link>
    </Text>
    <Text>
      Alternatively, free to connect with me on{' '}
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
  </Stack>
);

export default ContactSection;
