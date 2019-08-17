import React, { ReactElement } from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import {
  Hero,
  HeroHead,
  HeroBody,
  HeroFoot,
  SocialTile,
  TilesColumn,
  TitleColumn,
  Emoji
} from '../components';
import { IconLink, SocialTileProps } from '../types';

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

  const tweets: SocialTileProps[] = [
    {
      content: (
        <h4 className="content">
          &quot;Redesigned, re-introducing{' '}
          <a href="https://bdov.dev" target="_blank" rel="noopener noreferrer">
            bdov.dev
          </a>{' '}
          2.0. Shout-out to{' '}
          <a
            href="https://twitter.com/jgthms"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Jeremy Thomas Twitter"
          >
            @jgthms
          </a>{' '}
          for Bulma, my new favorite CSS framework, and{' '}
          <a
            href="https://twitter.com/zeithq"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Zeit HQ Twitter"
          >
            @zeithq
          </a>{' '}
          for making deployment so, so simple.{' '}
          <a href="#" tabIndex={-1}>
            #portfolio
          </a>
          &quot;
        </h4>
      ),
      date: new Date('2019-06-20'),
      link: 'https://twitter.com/bdov_/status/1141831637497368576'
    },
    {
      content: (
        <h4 className="content">
          &quot;I really like React. <a tabIndex={-1}>#React</a>{' '}
          <a tabIndex={-1}>#JavaScript</a> <a tabIndex={-1}>#TypeScript</a>
          &quot;
        </h4>
      ),
      date: new Date('2019-06-06'),
      link: 'https://twitter.com/bdov_/status/1136737122495238144'
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
    <Hero id="social">
      <div className="triangle" />
      <HeroHead />
      <HeroBody>
        <TitleColumn title="Social" icons={icons} />
        <TilesColumn>
          <div className="tile is-parent is-vertical">
            {tweets.slice(0, 2).map(
              (tweet: SocialTileProps, index: number): ReactElement => (
                <SocialTile key={index} {...tweet} />
              )
            )}
          </div>
          <div className="tile is-parent is-vertical">
            {tweets.slice(2, 4).map(
              (tweet: SocialTileProps, index: number): ReactElement => (
                <SocialTile key={index} {...tweet} />
              )
            )}
          </div>
        </TilesColumn>
      </HeroBody>
      <HeroFoot className="has-text-centered" />
    </Hero>
  );
};

export default SocialSection;