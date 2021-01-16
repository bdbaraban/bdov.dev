import { graphql } from 'gatsby';

export default graphql`
  query {
    file(relativePath: { eq: "take-your-time.gif" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
