import React, { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';

/**
 * Styled SVG
 */
const SVG = styled.svg``;

/**
 * Styled SVG circle
 */
const Circle = styled.circle`
  transition: stroke-dashoffset;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  z-index: 3;
`;

/**
 * Progress circle component prop types
 */
interface ProgressCircleProps {
  scroll: number;
}

/**
 * Scroll progress tracking circle
 */
const ProgressCircle = ({ scroll }: ProgressCircleProps): ReactElement => {
  const circumference = 40 * 2 * Math.PI;

  const calculateProgress = (percent: number): number => {
    return circumference - (percent / 100) * circumference;
  };

  return (
    <SVG width="100" height="100">
      <Circle
        stroke="#8d5a97"
        strokeWidth={4}
        fill="transparent"
        r={40}
        cx={50}
        cy={50}
        style={{
          strokeDasharray: `${circumference} ${circumference}`,
          strokeDashoffset: calculateProgress(scroll)
        }}
      />
    </SVG>
  );
};

export default ProgressCircle;
