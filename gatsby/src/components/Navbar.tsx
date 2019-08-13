import React from 'react';

const Navbar = (): React.ReactElement => (
  <nav className="navbar is-primary" role="navigation">
    <div className="container">
      <div className="navbar-brand is-fixed-top">
        <object
          className="navbar-item image"
          data="images/logo.svg"
          type="image/svg+xml"
          tabIndex={-1}
        >
          bdov.dev
        </object>
        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navMenu" className="navbar-menu has-background-primary">
        <div className="navbar-end">
          <a
            className="navbar-item is-spaced"
            href="BrennanDBarabanSoftwareEngineerResume2019.pdf"
            target="_blank"
          >
            <span>Resume</span>
            <span className="icon">
              <i className="fas fa-file"></i>
            </span>
          </a>
          <a
            className="navbar-item is-spaced"
            href="mailto:brennan@bdov.dev"
            target="_top"
          >
            <span>Contact</span>
            <span className="icon">
              <i className="fas fa-envelope"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
