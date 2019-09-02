import React, { HTMLAttributes, ReactElement, PropsWithChildren } from 'react';
import { Footer, Navbar } from 'components';

/**
 * Site body layout wrapper
 */
const Layout = ({
  children
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>): ReactElement => {
  return (
    <body>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </body>
  );
};

export default Layout;
