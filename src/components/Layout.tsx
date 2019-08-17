import React, {
  HTMLAttributes,
  ReactElement,
  PropsWithChildren,
  useEffect,
  useState
} from 'react';
import { Footer, Navbar } from '.';

/**
 * Site body layout wrapper
 */
const Layout = ({
  children
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>): ReactElement => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const getDocHeight = (): number => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  };

  const calculateScrollDistance = (): void => {
    const scrollTop = window.pageYOffset;
    const winHeight = window.innerHeight;
    const docHeight = getDocHeight();
    const totalDocScrollLength = docHeight - winHeight;
    setScrollPosition((scrollTop / totalDocScrollLength) * 100);
  };

  useEffect((): void => {
    document.addEventListener('scroll', (): void => {
      requestAnimationFrame((): void => {
        calculateScrollDistance();
      });
    });
  }, []);

  return (
    <body className="has-navbar-fixed-top">
      <header>
        <Navbar scrollPosition={scrollPosition} />
      </header>
      <main>{children}</main>
      <Footer />
    </body>
  );
};

export default Layout;
