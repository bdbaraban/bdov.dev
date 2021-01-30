import { useEffect, useState } from 'react';

const isClient = () =>
  typeof window !== 'undefined' && typeof document !== 'undefined';

const use100vh = () => {
  const [height, setHeight] = useState(null);
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    if (isClient()) {
      setRendered(true);
    }
  }, []);

  useEffect(() => {
    if (!rendered) {
      return undefined;
    }

    const setMeasuredHeight = () => {
      if (!isClient()) {
        setHeight(null);
      } else if (!document.documentElement) {
        setHeight(window.innerHeight);
      } else {
        setHeight(document.documentElement.clientHeight);
      }
    };

    window.addEventListener('resize', setMeasuredHeight);
    setMeasuredHeight();

    return () => {
      window.removeEventListener('resize', setMeasuredHeight);
    };
  }, [rendered]);

  return height;
};

export default use100vh;
