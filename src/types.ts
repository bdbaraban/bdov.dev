import { ReactElement } from 'react';

/**
 * Link information for clickable icons
 */
export interface IconLink {
  // Link
  href: string;
  // Icon label
  label: string;
  // Icon element
  element: ReactElement;
}

/**
 * Personal project information for project tiles
 */
export interface ProjectTileProps {
  // Name of project
  title: string;
  // Project emoji (displayed with title)
  emoji: ReactElement;
  // Link to deployed project (optional)
  link?: string;
  // Link to project GitHub page
  github: string;
  // Project description
  description: string;
  // Array of tools used in project
  tools: string[];
}

/**
 * Blog article information for project tiles
 */
export interface BlogTileProps {
  // Article title
  title: string;
  // Article description
  description: string;
  // Article highlight (optional)
  highlight?: string;
  // Link to article
  link: string;
  // Article posted date
  date: Date;
  // Read time
  minutes: number;
  // Medium clap count (optional - if Medium article)
  claps?: number;
}

/**
 * Social post information for project tiles
 */
export interface SocialTileProps {
  // Link to post
  link: string;
  // Post content
  content: ReactElement;
  // Posted date
  date: Date;
}
