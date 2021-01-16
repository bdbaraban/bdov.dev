/** @jsx jsx */
import { useState } from 'react';
import { Box, Button, Flex, jsx } from 'theme-ui';
import { Helmet } from 'react-helmet';
import HomeSection from '../components/HomeSection';
import WorkSection from '../components/WorkSection';
import ContactSection from '../components/ContactSection';
import DateAndTime from '../components/DateAndTime';

const sections = {
  home: <HomeSection />,
  work: <WorkSection />,
  contact: <ContactSection />,
};

const Home = () => {
  const [section, setSection] = useState('home');

  return (
    <Box sx={{ height: '100vh', display: 'flex', padding: [4, 8, 12, 16] }}>
      <Helmet>
        <meta charset="utf-8" />
        <title>Brennan D Baraban: Software Engineer</title>
        <meta
          name="description"
          content="This is my personal domain - welcome!"
        />
        <link rel="canonical" href="https://bdov.dev" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦙</text></svg>"
        />
      </Helmet>
      <Flex sx={{ flex: 1, flexDirection: ['column', null, 'row'] }}>
        <Box
          pl={8}
          pr={[4, null, 8]}
          py={4}
          sx={{
            flex: '1 1 auto',
            borderLeft: '2px',
            overflowY: 'auto',
            width: '100%',
          }}
        >
          {sections[section]}
        </Box>
        <Flex
          sx={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            minWidth: ['100%', null, '160px'],
          }}
        >
          <Flex
            pl={[0, null, 8]}
            py={4}
            sx={{
              height: 'min-content',
              borderLeft: ['none', null, '2px'],
              flexDirection: ['row', null, 'column'],
              justifyContent: 'space-around',
            }}
          >
            <Button
              sx={{
                variant: section === 'home' ? 'buttons.solid' : 'buttons.ghost',
                width: '100%',
              }}
              onClick={() => setSection('home')}
            >
              Home
            </Button>
            <Button
              sx={{
                variant: section === 'work' ? 'buttons.solid' : 'buttons.ghost',
                width: '100%',
                my: [0, null, 4],
                mx: [4, null, 0],
              }}
              onClick={() => setSection('work')}
            >
              Work
            </Button>
            <Button
              sx={{
                variant:
                  section === 'contact' ? 'buttons.solid' : 'buttons.ghost',
                width: '100%',
              }}
              onClick={() => setSection('contact')}
            >
              Contact
            </Button>
          </Flex>
          <DateAndTime
            sx={{
              pt: 4,
              display: 'flex',
              height: 'min-content',
              borderTop: '2px',
              flexDirection: ['row', null, 'column'],
              justifyContent: ['space-around', null, 'flex-end'],
              textAlign: 'right',
            }}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
