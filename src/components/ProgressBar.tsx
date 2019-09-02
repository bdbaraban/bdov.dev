import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

// Progress prop types
interface ProgressPropTypes {
  scroll: number;
}

// Progress bar styled component
const Progress = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  background-repeat: no-repeat;
  background: linear-gradient(
    to right,
    #8d5a97 ${({ scroll }: ProgressPropTypes): string => `${scroll}%`},
    transparent 0
  );
  width: 100%;
  height: 4px;
  z-index: 3;
`;

/**
 * Scroll progress tracking bar
 */
const ProgressBar = (): ReactElement => {
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

  const calculateScrollDistance = useCallback((): void => {
    const scrollTop = window.pageYOffset;
    const winHeight = window.innerHeight;
    const docHeight = getDocHeight();
    const totalDocScrollLength = docHeight - winHeight;
    setScrollPosition((scrollTop / totalDocScrollLength) * 100);
  }, []);

  useEffect((): void => {
    document.addEventListener('scroll', (): void => {
      requestAnimationFrame((): void => {
        calculateScrollDistance();
      });
    });
  }, [calculateScrollDistance]);

  return <Progress scroll={scrollPosition} />;
};

export default ProgressBar;
