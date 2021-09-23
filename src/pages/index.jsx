/** @jsx jsx */
import { useEffect, useState } from 'react';
import { Box, Button, Flex, jsx } from 'theme-ui';
import HomeSection from '../components/HomeSection';
import CareerSection from '../components/CareerSection';
import ContactSection from '../components/ContactSection';
import DateAndTime from '../components/DateAndTime';
import SEO from '../components/SEO';
import use100vh from '../hooks/use100vh';

const sections = {
  home: <HomeSection />,
  career: <CareerSection />,
  contact: <ContactSection />,
};

const hashes = {
  home: '',
  career: 'career',
  contact: 'contact',
};

const Home = () => {
  const [section, setSection] = useState('home');
  const height = use100vh();

  const handleClick = (key) => {
    setSection(key);
    window.location.hash = hashes[key];
  };

  useEffect(() => {
    const hash = window.location.hash.substr(1);
    setSection(hashes[hash] || 'home');
  }, []);

  return (
    <Box
      sx={{
        height: height ? `${height}px` : '100vh',
        display: 'flex',
        padding: [4, 8, 12, 14],
      }}
    >
      <SEO />
      <Flex sx={{ flex: 1, flexDirection: ['column', null, 'row'] }}>
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
              onClick={() => handleClick('home')}
            >
              /
            </Button>
            <Button
              sx={{
                variant:
                  section === 'career' ? 'buttons.solid' : 'buttons.ghost',
                width: '100%',
                height: '36px',
                justifyContent: ['center', null, 'flex-start'],
                my: [0, null, 4],
                mx: [4, null, 0],
              }}
              onClick={() => handleClick('career')}
            >
              /career
            </Button>
            <Button
              sx={{
                variant:
                  section === 'contact' ? 'buttons.solid' : 'buttons.ghost',
                width: '100%',
                height: '36px',
              }}
              onClick={() => handleClick('contact')}
            >
              /contact
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
