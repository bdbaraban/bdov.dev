import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Tag } from 'components';
import theme from 'utils/theme';

// Styled divider line
const Divider = styled.hr`
  border-top: 2px solid ${theme.palette.purple};
  margin: 1.5em auto 1.5em;
  width: 35%;
`;

// Skill object type
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
    { skill: 'SQL', interest: false },
    { skill: 'NoSQL', interest: true },
    { skill: 'C', interest: false },
    { skill: 'Bash', interest: false }
  ];

  const frameworks: Skill[] = [
    { skill: 'React', interest: true },
    { skill: 'React Native', interest: true },
    { skill: 'Node.js', interest: true },
    { skill: 'Redux', interest: true },
    { skill: 'Jest', interest: true },
    { skill: 'Express', interest: false },
    { skill: 'Flask', interest: true },
    { skill: 'MySQL', interest: false },
    { skill: 'MongoDB', interest: true }
  ];

  const tools: Skill[] = [
    { skill: 'Linux', interest: true },
    { skill: 'Nginx', interest: true },
    { skill: 'Git', interest: true },
    { skill: 'Puppet', interest: false },
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
          <h4 className="title is-5 is-marginless has-text-centered has-text-white">
            Languages
          </h4>
          <Divider />
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
          <h4 className="title is-5 is-marginless has-text-centered has-text-white">
            Frameworks
          </h4>
          <Divider />
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
          <h4 className="title is-5 is-marginless has-text-centered has-text-white">
            Tools
          </h4>
          <Divider />
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
