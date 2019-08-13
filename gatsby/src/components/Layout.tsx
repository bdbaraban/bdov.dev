import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps): React.ReactElement => {
  return (
    <body>
      <main>{children}</main>
    </body>
  );
};

export default Layout;
