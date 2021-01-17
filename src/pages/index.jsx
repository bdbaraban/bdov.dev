/** @jsx jsx */
import { useState } from 'react';
import { Box, Button, Flex, jsx } from 'theme-ui';
import HomeSection from '../components/HomeSection';
import WorkSection from '../components/WorkSection';
import ContactSection from '../components/ContactSection';
import DateAndTime from '../components/DateAndTime';
import SEO from '../components/SEO';

const sections = {
  home: <HomeSection />,
  work: <WorkSection />,
  contact: <ContactSection />,
};

const Home = () => {
  const [section, setSection] = useState('home');

  return (
    <Box sx={{ height: '100vh', display: 'flex', padding: [4, 8, 12, 16] }}>
      <SEO />
      <Flex
        sx={{
          flex: 1,
          flexDirection: ['column', null, 'row'],
        }}
      >
        <Box
          pl={[4, null, 8]}
          pr={[2, null, 8]}
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
            minHeight: 'min-content',
          }}
        >
          <Flex
            pl={[0, null, 8]}
            py={4}
            sx={{
              borderLeft: ['none', null, '2px'],
              flexDirection: ['row', null, 'column'],
              justifyContent: 'space-around',
            }}
          >
            <Button
              sx={{
                variant: section === 'home' ? 'buttons.solid' : 'buttons.ghost',
                width: '100%',
                height: '36px',
              }}
              onClick={() => setSection('home')}
            >
              Home
            </Button>
            <Button
              sx={{
                variant: section === 'work' ? 'buttons.solid' : 'buttons.ghost',
                width: '100%',
                height: '36px',
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
                height: '36px',
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
