import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { FaMedium } from 'react-icons/fa';
import {
  Arrow,
  BlogCard,
  CardContainer,
  IconRow,
  SectionTitle
} from 'components';
import theme from 'utils/theme';
import { BlogCardProps, IconLink } from 'utils/types';

// Custom styled Bulma CSS hero-body
const StyledHeroBody = styled.div`
  padding-top: 0 !important;
  padding-bottom: 0 !important;
`;

/**
 * Blog articles hero section
 */
const BlogSection = (): ReactElement => {
  const icons: IconLink[] = [
    {
      href: 'https://medium.com/@bdov_',
      label: 'medium',
      element: <FaMedium />
    }
  ];

  const articles: BlogCardProps[] = [
    {
      link:
        'https://medium.com/@bdov_/my-major-is-american-studies-9cb043853a6d',
      title: 'My Major is American Studies.',
      description:
        'I know what you’re thinking: What are you going to do with that? To answer concisely: I am going to be a software engineer.',
      highlight: 'Featured on UC Davis American Studies department website.',
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
    <section id="blog" className="hero">
      <StyledHeroBody className="hero-body">
        <div className="level is-flex is-fullwidth is-hcentered">
          <div className="columns is-desktop is-fullwidth is-vcentered">
            <div className="column is-full-touch is-one-quarter-desktop is-block has-text-centered">
              <SectionTitle title="Blog" />
              <IconRow icons={icons} />
            </div>
            <div className="column is-full-touch is-three-quarters-desktop is-paddingless has-text-centered">
              <CardContainer>
                {articles.map(
                  (article, index): ReactElement => {
                    return <BlogCard key={index} {...article} />;
                  }
                )}
              </CardContainer>
              <Arrow color={theme.palette.yellow} />
            </div>
          </div>
        </div>
      </StyledHeroBody>
    </section>
  );
};

export default BlogSection;
