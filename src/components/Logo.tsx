import React, { ReactElement } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Link } from 'react-scroll';
import styled from 'styled-components';

// Custom styled react-scroll Link
const StyledLink = styled(Link)`
  position: absolute;
  left: 26px;
`;

/**
 * Clickable navbar logo that scrolls to title section
 */
const Logo = (): ReactElement => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "images/logo.png" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <StyledLink
      to="title"
      spy={true}
      smooth={true}
      duration={1000}
      tabIndex={0}
    >
      <Img fixed={data.placeholderImage.childImageSharp.fixed} />
    </StyledLink>
  );
};

export default Logo;
