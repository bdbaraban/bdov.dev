import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

/**
 * Search engine optimatization component
 */
const SEO = ({
  title,
  description = '',
  pathname = '/',
  lang = 'en',
  meta = [],
}) => {
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

  const metaDescription = description || site.siteMetadata.description;
  const metaUrl = `${site.siteMetadata.url}${pathname}`;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      link={{
        rel: 'icon',
        href:
          'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦙</text></svg>',
      }}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:image`,
          content: `${site.siteMetadata.url}${site.siteMetadata.image}`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: metaUrl,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.twitterUsername,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: `twitter:image`,
          content: `${site.siteMetadata.url}${site.siteMetadata.image}`,
        },
      ].concat(meta)}
    />
  );
};

export default SEO;
