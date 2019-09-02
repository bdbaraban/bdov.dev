import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import theme from 'utils/theme';

// Circle radius constant
const RADIUS = 40;

// Circle circumference constant
const CIRCUMFERENCE = RADIUS * 2 * Math.PI;

// Calculate scroll percentage
const calculateProgress = (percent: number): number => {
  return CIRCUMFERENCE - (percent / 100) * CIRCUMFERENCE;
};

// Styled SVG circle
const Circle = styled.circle`
  transition: stroke-dashoffset;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  z-index: 3;
`;

/**
 * Scroll progress tracking circle
 */
const ProgressCircle = (): ReactElement => {
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

  return (
    <svg width="100" height="100">
      <Circle
        stroke={theme.palette.purple}
        strokeWidth={4}
        fill="transparent"
        r={RADIUS}
        cx={50}
        cy={50}
        style={{
          strokeDasharray: `${CIRCUMFERENCE} ${CIRCUMFERENCE}`,
          strokeDashoffset: calculateProgress(scrollPosition)
        }}
      />
    </svg>
  );
};

export default ProgressCircle;
