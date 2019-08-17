import React, { ReactElement } from 'react';
import { FaHeading, FaMedium } from 'react-icons/fa';
import {
  BlogTile,
  Hero,
  HeroHead,
  HeroBody,
  HeroFoot,
  TitleColumn,
  TilesColumn
} from '../components';
import { BlogTileProps } from '../types';

/**
 * Blog articles hero section
 */
const BlogSection = (): ReactElement => {
  const icons = [
    {
      href: 'https://medium.com/@bdov_',
      label: 'medium',
      element: <FaMedium />
    },
    {
      href: 'https://www.holbertonschool.com/coding-resource-pointers-in-c',
      label: 'H',
      element: <FaHeading />
    }
  ];

  const articles: BlogTileProps[] = [
    {
      link:
        'https://medium.com/@bdov_/my-major-is-american-studies-9cb043853a6d',
      title: 'My Major is American Studies.',
      description:
        'I know what you’re thinking: What are you going to do with that? To answer conciesly: I am going to be a software engineer.',
      date: new Date('2018-01-19'),
      minutes: 4,
      claps: 50
    },
    {
      link:
        'https://medium.com/@bdov_/javascript-typescript-clarifying-closures-e9c17d10c4e2',
      title: 'JavaScript/TypeScript: Clarifying Closures',
      description:
        "Closures can be confusing in JavaScript. But, the truth is - you've most likely used them before! Let me explain.",
      highlight: "Selected for Medium's metered paywall.",
      minutes: 5,
      date: new Date('2019-06-19'),
      claps: 50
    },
    {
      link:
        'https://medium.com/datadriveninvestor/https-medium-com-bdov-learn-how-machines-learn-7ea94e85e7b7',
      title: 'Learn How Machines Learn',
      description:
        'How does A.I. work? How is software capable of predicting and interpreting human behavior? Quite simply, how do machines learn?',
      highlight: 'Featured in publication Data Driven Investors.',
      minutes: 14,
      date: new Date('2019-01-25'),
      claps: 31
    },
    {
      link:
        'https://medium.com/@bdov_/https-medium-com-bdov-python-objects-part-iii-string-interning-625d3c7319de',
      title: 'Python Objects Part III: String Interning',
      description:
        'A full understanding of Python object instantiation requires an examination of one last relevant implementation - string interning.',
      minutes: 10,
      date: new Date('2019-01-15'),
      claps: 101
    }
  ];

  return (
    <Hero id="blog">
      <div className="triangle" />
      <HeroHead />
      <HeroBody>
        <TitleColumn title="Blog" icons={icons} />
        <TilesColumn>
          <div className="tile is-parent is-vertical">
            {articles.slice(0, 2).map(
              (article: BlogTileProps, index: number): ReactElement => (
                <BlogTile key={index} {...article} />
              )
            )}
          </div>
          <div className="tile is-parent is-vertical">
            {articles.slice(2, 4).map(
              (article: BlogTileProps, index: number): ReactElement => (
                <BlogTile key={index} {...article} />
              )
            )}
          </div>
        </TilesColumn>
      </HeroBody>
      <HeroFoot className="has-text-centered" />
    </Hero>
  );
};

export default BlogSection;
