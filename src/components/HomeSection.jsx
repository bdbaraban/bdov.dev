/** @jsx jsx */
import { jsx, Image, Text } from 'theme-ui';
import Emoji from 'a11y-react-emoji';
import Section from './Section';

const HomeSection = () => (
  <Section>
    <Text>
      Wow, hello! Thank you for visiting my domain.{' '}
      <Emoji symbol="🗻" label="mount fuji" />
    </Text>
    <Text>
      I know not what brings you here - perhaps you are a lost acquaintance
      perusing my online profile; maybe you are one of the recruiters I like to
      imagine will flood this site with the opportunity-I-can&apos;t-refuse;
      most likely, you a bot trying to scrape some juicy personal data -
      regardless, welcome.
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
  </Section>
);

export default HomeSection;
