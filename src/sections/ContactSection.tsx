import React, { ReactElement } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ContactForm, Hero, HeroHead, HeroBody, HeroFoot } from '../components';

const ContactSection = (): ReactElement => {
  const data = useStaticQuery(graphql`
    {
      file(
        relativePath: { eq: "BrennanDBarabanSoftwareEngineerResume2019.pdf" }
      ) {
        publicURL
      }
    }
  `);

  return (
    <Hero id="contact">
      <div className="triangle" />
      <HeroHead />
      <HeroBody>
        <div className="container has-text-centered">
          <h4 className="title is-3 has-text-white">Reach out to me!</h4>
          <h5 className="title is-5 has-text-white">
            Read my{' '}
            <a
              className="has-text-warning"
              href={data.file.publicURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              resume
            </a>
            .
          </h5>
          <h5 className="title is-5 has-text-white">
            Connect with me on{' '}
            <a
              className="has-text-warning"
              href="https://linkedin.com/in/bdbaraban"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            .
          </h5>
          <h5 className="title is-5 has-text-white">Or, drop me a line:</h5>
          <ContactForm />
        </div>
      </HeroBody>
      <HeroFoot className="has-text-centered" />
    </Hero>
  );
};

export default ContactSection;
