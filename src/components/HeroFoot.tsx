import React, { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';

/**
 * Bulma CSS styled hero foot div
 */
const HeroFoot = ({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>): ReactElement => (
  <div className={`hero-foot ${props.className}`} {...props}>
    {children}
  </div>
);

export default HeroFoot;
