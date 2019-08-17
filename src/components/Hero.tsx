import React, { HTMLAttributes, PropsWithChildren, ReactElement } from 'react';

/**
 * Bulma CSS styled hero section
 */
const Hero = ({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLElement>>): ReactElement => (
  <section className={`hero is-fullheight ${props.className}`} {...props}>
    {children}
  </section>
);

export default Hero;
