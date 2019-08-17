import React, { ReactElement } from 'react';
import Typist from 'react-typist';

/**
 * Animated code biography
 */
const Code = (): ReactElement => {
  return (
    <div className="level-item">
      <pre className="code-highlight">
        <Typist>
          <span className="keyword">const</span>{' '}
          <span className="punctuation">{'['}</span>
          me, setMe
          <span className="punctuation">{']'}</span> ={' '}
          <span className="keyword">React</span>.
          <span className="function">useState</span>
          <span className="punctuation">{'('}</span>
          <span className="symbol">{'{}'}</span>
          <span className="punctuation">{')'}</span>
          {';'}
          <br />
          <br />
          <span className="function">setMe</span>
          <span className="punctuation">{'('}</span>
          <span className="symbol">{'{'}</span>
          <br />
          {'  '}
          what: <span className="string">&apos;Software Engineer&apos;</span>
          {','}
          <br />
          {'  '}
          where:{' '}
          <span className="string">&apos;San Francisco Bay Area&apos;</span>
          {', '}
          <br />
          {'  '}
          alumni: <span className="punctuation">{'['}</span>
          <span className="string">&apos;UC Davis&apos;</span>
          {', '}
          <span className="string">&apos;Holberton School&apos;</span>
          <span className="punctuation">{']'}</span>
          {', '}
          <br />
          {'  '}
          loves: <span className="string">&apos;React&apos;</span>
          {', '}
          <br />
          {'  '}
          alwaysLearning: <span className="boolean">true</span>
          <br />
          <span className="symbol">{'}'}</span>
          <span className="punctuation">{')'}</span>
          {';'}
        </Typist>
      </pre>
    </div>
  );
};

export default Code;
