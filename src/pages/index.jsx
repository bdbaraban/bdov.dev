/** @jsx jsx */
import { useEffect, useState, useRef } from 'react';
import { Box, Flex, Heading, Image, jsx, Link, Text } from 'theme-ui';
import Emoji from 'a11y-react-emoji';
import Img from 'gatsby-image';
import TakeYourTime from '../components/TakeYourTime';
import CustomButton from '../components/CustomButton';
import CustomLink from '../components/CustomLink';
import Stack from '../components/Stack';

const pages = {
  home: (
    <Stack>
      <Text>
        Wow, hello! Thank you for visiting my domain.{' '}
        <Emoji symbol="🙂" label="slightly-smiling-face" />
      </Text>
      <Text>
        This site is more placeholder than portfolio; take your time regardless,
        and please do reach out!
      </Text>
      <Img fixed={TakeYourTime.file.childImageSharp.fixed} />
      <Image src="https://media.giphy.com/media/OovKvQaKzwzLy/giphy.gif" />
    </Stack>
  ),
  work: (
    <Stack>
      <Text>
        I am the Lead Software Engineer at{' '}
        <CustomLink href="https://einsteinstudios.io">
          Einstein Studios
        </CustomLink>
        , where I have worked on two significant projects:
      </Text>
      <ul
        sx={{
          listStyle: 'none',
          m: 0,
          px: 3,
          py: 4,
        }}
      >
        <li sx={{ mb: 4 }}>
          <Heading as="h2" sx={{ m: 0 }}>
            <Link
              href="https://app.einsteinstudios.io"
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                ':hover,:focus': {
                  color: 'primary',
                  textDecoration: 'underline',
                },
              }}
            >
              Einstein Studios Web Platform
            </Link>
          </Heading>
          <small sx={{ fontWeight: 'bold' }}>10/10/10</small>
          <Text sx={{ mt: 4, mb: 8 }}>
            When I joined the company, Einstein Studios offered a virtual
            reality application where we offered children to take lessons from
            Spanish and reading tutors. I independently built both the public
            web platform managing tutor-student scheduling and payments, as well
            as an internal one where employees could take corresponding actions
            on an administrator level.
          </Text>
        </li>
        <li sx={{ mb: 4 }}>
          <Heading as="h2" sx={{ m: 0 }}>
            <Link
              href="https://teachwithkoala.com"
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                ':hover,:focus': {
                  color: 'primary',
                  textDecoration: 'underline',
                },
              }}
            >
              Koala
            </Link>
          </Heading>
          <small sx={{ fontWeight: 'bold' }}>10/10/10</small>
          <Text sx={{ mt: 4 }}>Koala is your place to teach.</Text>
        </li>
      </ul>
    </Stack>
  ),
  contact: (
    <Stack>
      <Text>
        I am best reached directly by email at{' '}
        <CustomLink href="mailto:brennan@bdov.dev">
          brennan@bdov.dev.
        </CustomLink>
      </Text>
      <Text>
        For the sake of filling up more space on this page, here are my social
        links:
      </Text>
      <ul>
        <li>
          <CustomLink href="https://linkedin.com">LinkedIn</CustomLink>
        </li>
        <li>
          <CustomLink href="https://linkedin.com">Twitter</CustomLink>
        </li>
        <li>
          <CustomLink href="https://facebook.com">Facebook</CustomLink>
        </li>
      </ul>
    </Stack>
  ),
};

const formatToday = () => {
  const datetime = new Date();
  const month = datetime.getMonth() + 1;
  const day = datetime.getDate();
  const year = datetime.getFullYear();
  return `${month}/${day}/${year}`;
};

const Home = () => {
  const [page, setPage] = useState('home');
  const [time, setTime] = useState('00:00:00');
  const initialTime = useRef(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const newTime = now.getSeconds() - initialTime.current.getSeconds();
      setTime(new Date(newTime * 1000).toISOString().substr(11, 8));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{ height: '100vh', display: 'flex', padding: [4, 8, 12, 16] }}>
      <Flex
        sx={{
          flex: 1,
          flexDirection: ['column', null, 'row'],
        }}
      >
        <Box
          px={8}
          py={4}
          sx={{
            flex: '1 1 auto',
            borderLeft: '2px',
            overflowY: 'auto',
            width: '100%',
          }}
        >
          {pages[page]}
        </Box>
        <Flex
          sx={{
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Flex
            px={8}
            py={4}
            sx={{
              height: 'min-content',
              minWidth: ['100%', null, '160px'],
              borderLeft: ['none', null, '2px'],
              flexDirection: ['row', null, 'column'],
              justifyContent: 'space-around',
            }}
          >
            <CustomButton
              isActive={page === 'home'}
              onClick={() => setPage('home')}
            >
              Home
            </CustomButton>
            <CustomButton
              isActive={page === 'work'}
              onClick={() => setPage('work')}
              sx={{
                my: [0, null, 4],
                mx: [4, null, 0],
              }}
            >
              Work
            </CustomButton>
            <CustomButton
              isActive={page === 'contact'}
              onClick={() => setPage('contact')}
            >
              Contact
            </CustomButton>
          </Flex>
          <Flex
            mx={2}
            sx={{
              height: 'min-content',
              borderTop: '2px',
              flexDirection: ['row', null, 'column'],
              justifyContent: ['space-around', null, 'flex-end'],
              textAlign: 'right',
            }}
          >
            <Text pt={[2, null, 4]}>{formatToday()}</Text>
            <Text pt={[2, null, 0]}>{time}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
