import React, { ReactElement } from 'react';
import { Divider, Layout, SEO } from 'components';
import {
  AboutSection,
  BlogSection,
  ContactSection,
  ProjectsSection,
  SocialSection,
  TitleSection
} from 'sections';
import 'scss/main.scss';

/**
 * Root home page
 */
const IndexPage = (): ReactElement => (
  <Layout>
    <SEO title="Home" />
    <TitleSection />
    <AboutSection />
    <Divider />
    <ProjectsSection />
    <Divider />
    <BlogSection />
    <Divider />
    <SocialSection />
    <Divider />
    <ContactSection />
  </Layout>
);

export default IndexPage;
