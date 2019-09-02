import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import {
  Arrow,
  CardContainer,
  Emoji,
  IconRow,
  SectionTitle,
  SocialCard
} from 'components';
import theme from 'utils/theme';
import { IconLink, SocialCardProps } from 'utils/types';

// Custom styled Bulma CSS hero-body
const StyledHeroBody = styled.div`
  padding-top: 0 !important;
  padding-bottom: 0 !important;
`;

// Custom styled non-interactive link for hashtags
const StyledText = styled.span`
  color: ${theme.palette.blue};
`;

/**
 * Social links hero section
 */
const SocialSection = (): ReactElement => {
  const icons: IconLink[] = [
    {
      href: 'https://twitter.com/bdov_',
      label: 'twitter',
      element: <FaTwitter />
    },
    {
      href: 'https://www.facebook.com/brennan.baraban',
      label: 'facebook',
      element: <FaFacebook />
    },
    {
      href: 'https://www.instagram.com/bdov_',
      label: 'instagram',
      element: <FaInstagram />
    }
  ];

  const tweets: SocialCardProps[] = [
    {
      content: (
        <h4 className="content">
          &quot;Finished another iteration of my portfolio site. My React skills
          have come a long way - pulled off a complete conversion onto{' '}
          <StyledText>@gatsbyjs</StyledText> in less than a week. It&apos;s all
          about those incremental improvements.{' '}
          <StyledText>#portfolio</StyledText> <StyledText>#react</StyledText>{' '}
          <StyledText>#bulmacss</StyledText> <StyledText>#zeitnow</StyledText>
          <br />
          <br />
          Check it out! <StyledText>bdov.dev</StyledText>
          &quot;
        </h4>
      ),
      date: new Date('2019-08-17'),
      link: 'https://twitter.com/bdov_/status/1162858307683381248'
    },
    {
      content: (
        <h4 className="content">
          &quot;Mmm, got a lot in the works.{' '}
          <Emoji label="man-technologist" symbol="👨‍💻" />
          <Emoji label="man-technologist" symbol="👨‍💻" />
          <Emoji label="man-technologist" symbol="👨‍💻" />
          &quot;
        </h4>
      ),
      date: new Date('2019-05-21'),
      link: 'https://twitter.com/bdov_/status/1130893871045464064'
    },
    {
      content: (
        <h4 className="content">
          &quot;I really like React.{' '}
          <StyledText tabIndex={-1}>#React</StyledText>{' '}
          <StyledText tabIndex={-1}>#JavaScript</StyledText>{' '}
          <StyledText tabIndex={-1}>#TypeScript</StyledText>
          &quot;
        </h4>
      ),
      date: new Date('2019-06-06'),
      link: 'https://twitter.com/bdov_/status/1136737122495238144'
    },
    {
      content: (
        <h4 className="content">
          &quot;My lifelong tech goal is to reach a point where you can broach a
          conversation with me on any software language, tool, or concept, and
          that I’ll at least have a basic idea of what that topic is, how it
          works, and what it is used for.&quot;
        </h4>
      ),
      date: new Date('2019-04-24'),
      link: 'https://twitter.com/bdov_/status/1121148490715807744'
    }
  ];

  return (
    <section id="social" className="hero">
      <StyledHeroBody className="hero-body">
        <div className="level is-flex is-fullwidth is-hcentered">
          <div className="columns is-desktop is-fullwidth is-vcentered">
            <div className="column is-full-touch is-one-quarter-desktop is-block has-text-centered">
              <SectionTitle title="Social" />
              <IconRow icons={icons} />
            </div>
            <div className="column is-full-touch is-three-quarters-desktop is-paddingless has-text-centered">
              <CardContainer>
                {tweets.map(
                  (tweet, index): ReactElement => {
                    return <SocialCard key={index} {...tweet} />;
                  }
                )}
              </CardContainer>
              <Arrow color={theme.palette.black} />
            </div>
          </div>
        </div>
      </StyledHeroBody>
    </section>
  );
};

export default SocialSection;
