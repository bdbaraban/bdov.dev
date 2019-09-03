const React = require('react');
const gatsby = jest.requireActual('gatsby');

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(({ to, ...rest }) =>
    React.createElement('a', {
      href: to,
      ...rest
    })
  ),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn()
};
