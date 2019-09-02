import React, { ReactElement } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

/**
 * Optimized headshot image
 */
const Headshot = (): ReactElement => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "images/headshot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img
      className="is-rounded"
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  );
};

export default Headshot;
