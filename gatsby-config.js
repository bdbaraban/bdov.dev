module.exports = {
  siteMetadata: {
    title: `Brennan D Baraban: Software Engineer`,
    titleTemplate: `%s · Brennan D Baraban: Software Engineer`,
    description: `Brennan D Baraban is a full-stack software engineer based in the San Francisco Bay Area.`,
    url: `https://bdov.dev`,
    image: `/colored-logo.png`,
    twitterUsername: `@bdov_`
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `bdov.dev`,
        short_name: `bdov.dev`,
        start_url: `/`,
        background_color: `#1f5673`,
        theme_color: `#1f5673`,
        display: `standalone`,
        icon: `src/assets/images/logo.png`
      }
    },
    `gatsby-plugin-offline`
  ]
};
