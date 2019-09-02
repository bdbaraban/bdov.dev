import React, { ReactElement } from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

// React helmet meta type
interface MetaObject {
  name: string;
  content: any;
  property?: undefined;
}

// SEO component prop types
interface SEOProps {
  title: string;
  description?: string;
  pathname?: string;
  lang?: string;
  meta?: MetaObject[];
}

/**
 * Search engine optimatization component
 */
const SEO = ({
  title,
  description = '',
  pathname = '/',
  lang = 'en',
  meta = []
}: SEOProps): ReactElement => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            titleTemplate
            description
            url
            image
            twitterUsername
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaUrl = `${site.siteMetadata.url}${pathname}`;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={site.siteMetadata.titleTemplate}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:image`,
          content: `${site.siteMetadata.url}${site.siteMetadata.image}`
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `og:url`,
          content: metaUrl
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.twitterUsername
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        },
        {
          property: `twitter:image`,
          content: `${site.siteMetadata.url}${site.siteMetadata.image}`
        }
      ].concat(meta)}
    />
  );
};

export default SEO;
