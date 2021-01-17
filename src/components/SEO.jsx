import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

/**
 * Search engine optimatization component
 */
const SEO = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            url
            image
            twitterUsername
          }
        }
      }
    `,
  );

  const metaImage = `${site.siteMetadata.url}${site.siteMetadata.image}`;

  return (
    <Helmet>
      <html lang="en" />
      <title>{site.siteMetadata.title}</title>
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦙</text></svg>"
      />
      <meta name="description" content={site.siteMetadata.description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={site.siteMetadata.title} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:description" content={site.siteMetadata.description} />
      <meta property="og:url" content={site.siteMetadata.url} />
      <meta property="twitter:card" content="summary" />
      <meta
        property="twitter:description"
        content={site.siteMetadata.description}
      />
      <meta property="twitter:image" content={metaImage} />
    </Helmet>
  );
};

export default SEO;
