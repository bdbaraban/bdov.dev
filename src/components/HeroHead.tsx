import React, { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';

/**
 * Bulma CSS styled hero head div
 */
const HeroHead = ({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>): ReactElement => (
  <div className={`hero-head ${props.className}`} {...props}>
    {children}
  </div>
);

export default HeroHead;
