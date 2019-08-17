import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Tag } from '.';

/**
 * Custom styled StyledH4 for skill column titles
 */
const StyledH4 = styled.h4`
  text-decoration-color: #8d5a97;
  text-decoration-line: underline;
`;

/**
 * Skill object type
 */
export interface Skill {
  skill: string;
  interest: boolean;
}

/**
 * 3-column skill tags
 */
const Skills = (): ReactElement => {
  const languages: Skill[] = [
    { skill: 'Python', interest: true },
    { skill: 'JavaScript', interest: true },
    { skill: 'TypeScript', interest: true },
    { skill: 'HTML', interest: false },
    { skill: 'CSS', interest: false },
    { skill: 'C', interest: false },
    { skill: 'SQL', interest: false },
    { skill: 'NoSQL', interest: true }
  ];

  const frameworks: Skill[] = [
    { skill: 'React', interest: true },
    { skill: 'React Native', interest: true },
    { skill: 'Node.js', interest: true },
    { skill: 'Redux', interest: true },
    { skill: 'Express', interest: false },
    { skill: 'Flask', interest: true },
    { skill: 'MySQL', interest: false },
    { skill: 'MongoDB', interest: true }
  ];

  const tools: Skill[] = [
    { skill: 'Linux', interest: true },
    { skill: 'Nginx', interest: true },
    { skill: 'Git', interest: true },
    { skill: 'Fabric', interest: false },
    { skill: 'VSCode', interest: true },
    { skill: 'Vim', interest: true },
    { skill: 'Windows', interest: false },
    { skill: 'MacOS', interest: false }
  ];

  return (
    <div className="column is-full-touch is-half has-text-centered">
      <h3 className="title is-4 has-text-white">My skills/interests:</h3>
      <div className="columns is-flex-tablet">
        <div className="column is-flex has-tags">
          <StyledH4 className="title is-5 has-text-centered has-text-white">
            Languages
          </StyledH4>
          <div className="tags are-medium is-centered">
            {languages.map(
              (language: Skill, index: number): ReactElement => (
                <Tag
                  key={index}
                  skill={language.skill}
                  interest={language.interest}
                />
              )
            )}
          </div>
        </div>
        <div className="column is-flex has-tags">
          <StyledH4 className="title is-5 has-text-centered has-text-white">
            Frameworks
          </StyledH4>
          <div className="tags are-medium is-centered">
            {frameworks.map(
              (framework: Skill, index: number): ReactElement => (
                <Tag
                  key={index}
                  skill={framework.skill}
                  interest={framework.interest}
                />
              )
            )}
          </div>
        </div>
        <div className="column is-flex has-tags">
          <StyledH4 className="title is-5 has-text-centered has-text-white">
            Tools
          </StyledH4>
          <div className="tags are-medium is-centered">
            {tools.map(
              (tool: Skill, index: number): ReactElement => (
                <Tag key={index} skill={tool.skill} interest={tool.interest} />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
