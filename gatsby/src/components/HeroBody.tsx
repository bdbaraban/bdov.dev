import React, { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';

/**
 * Bulma CSS styled hero body div
 */
const HeroBody = ({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>): ReactElement => (
  <div className={`hero-body ${props.className}`} {...props}>
    <div className="level is-fullwidth">{children}</div>
  </div>
);

export default HeroBody;
