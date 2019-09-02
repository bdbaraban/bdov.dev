import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { ContactForm } from 'components';

// Custom styled Bulma CSS hero-body
const StyledHeroBody = styled.div`
  @media (min-width: 1024px) {
    margin-bottom: 0;
  }
`;

/**
 * Contact info hero section
 */
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
    <section id="contact" className="hero is-fullheight">
      <div className="triangle" />
      <div className="hero-head" />
      <StyledHeroBody className="hero-body">
        <div className="level is-flex is-fullwidth is-hcentered">
          <div className="columns is-desktop is-fullwidth is-vcentered">
            <div className="column is-full-touch is-two-fifths-desktop is-block has-text-centered">
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
            </div>
            <div className="column is-full-touch is-three-fifths-desktop has-text-centered">
              <ContactForm />
            </div>
          </div>
        </div>
      </StyledHeroBody>
      <div className="hero-foot" />
    </section>
  );
};

export default ContactSection;
