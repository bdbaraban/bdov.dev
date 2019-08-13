import React from 'react';
import './main.scss';
import { Layout } from '../components';
import {
  AboutSection,
  BlogSection,
  ContactSection,
  ProjectsSection,
  SocialSection,
  TitleSection
} from '../sections';

const IndexPage = (): React.ReactElement => (
  <Layout>
    <TitleSection />
    <AboutSection />
    <ProjectsSection />
    <BlogSection />
    <SocialSection />
    <ContactSection />
  </Layout>
);

export default IndexPage;
