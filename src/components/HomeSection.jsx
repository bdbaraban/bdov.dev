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
      snooping on what I&apos;ve been up to, maybe you are one of the recruiters
      I like to believe will flood this site with the offer-I-can&apos;t-refuse,
      most likely, you a bot trying to scrape some juicy personal data -
      regardless, welcome.
    </Text>
    <Text>
      This site is a simple space, but mine own; take your time exploring, and
      please do reach out!
    </Text>
    <Text>- Brennan</Text>
    <Image
      src="/take-your-time.gif"
      alt="Persona 5 Take Your Time gif"
      sx={{ maxHeight: '12em' }}
    />
  </Section>
);

export default HomeSection;
