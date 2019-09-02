import React, { ReactElement } from 'react';
import styled from 'styled-components';
import theme from 'utils/theme';

// Custom styled form component
const Form = styled.form`
  background: ${theme.palette.mediumBlue};
  border: 6px solid ${theme.palette.purple};
  border-radius: 4px;
  padding: 1em;
  text-align: left;
`;

// Custom styled form field
const Field = styled.div`
  margin-bottom: 16px !important;
  margin-top: 16px !important;
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
      <Field className="field">
        <div className="control">
          <input
            id="name"
            className="input"
            type="text"
            name="name"
            placeholder="Your name"
          />
        </div>
      </Field>
      <Field className="field">
        <div className="control">
          <input
            id="email"
            className="input"
            type="email"
            name="_replyto"
            placeholder="Your email"
          />
        </div>
      </Field>
      <Field className="field">
        <div className="control">
          <input
            id="subject"
            className="input"
            type="text"
            name="subject"
            placeholder="Subject"
          />
        </div>
      </Field>
      <Field className="field">
        <div className="control">
          <textarea
            id="message"
            className="textarea"
            placeholder="Message"
            name="message"
          ></textarea>
        </div>
      </Field>
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
