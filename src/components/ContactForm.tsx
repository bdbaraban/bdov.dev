import React, { ReactElement } from 'react';
import styled from 'styled-components';

/**
 * Custom styled form component
 */
const Form = styled.form`
  border: 4px solid #8d5a97;
  border-radius: 4px;
  padding: 1em;
  text-align: left;
`;

/**
 * Functional contact form component
 */
const ContactForm = (): ReactElement => {
  return (
    <Form
      className="container"
      action="https://formspree.io/brennan@bdov.dev"
      method="POST"
    >
      <div className="field">
        <label htmlFor="name" className="label">
          Your Name
        </label>
        <div className="control">
          <input
            id="name"
            className="input"
            type="text"
            name="name"
            placeholder="Jon Snow"
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="email" className="label">
          Your Email
        </label>
        <div className="control">
          <input
            id="email"
            className="input"
            type="email"
            name="_replyto"
            placeholder="jon@winterfell.org"
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="subject" className="label">
          Subject
        </label>
        <div className="control">
          <input
            id="subject"
            className="input"
            type="text"
            name="subject"
            placeholder="Winter is Coming"
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="message" className="label">
          Message
        </label>
        <div className="control">
          <textarea
            id="message"
            className="textarea"
            placeholder="You know nothing, Brennan Baraban."
            name="message"
          ></textarea>
        </div>
      </div>
      <label>
        <input type="text" name="_gotcha" style={{ display: 'none' }} />
      </label>
      <div className="field has-text-centered">
        <input className="button" type="submit" value="Submit" />
      </div>
    </Form>
  );
};

export default ContactForm;
