import React, { ReactElement } from 'react';
import { Layout, SEO } from '../components';
import {
  AboutSection,
  BlogSection,
  ContactSection,
  ProjectsSection,
  SocialSection,
  TitleSection
} from '../sections';
import '../scss/main.scss';

/**
 * Root page
 */
const IndexPage = (): ReactElement => (
  <Layout>
    <SEO title="Main" />
    <TitleSection />
    <AboutSection />
    <ProjectsSection />
    <BlogSection />
    <SocialSection />
    <ContactSection />
  </Layout>
);

export default IndexPage;
