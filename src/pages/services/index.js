import React from 'react';
import { navigate } from 'gatsby';

import BlogPreviewGrid from '../../components/BlogPreviewGrid';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Layout from '../../components/Layout/Layout';
import ThemeLink from '../../components/ThemeLink';

import { generateMockServiceData } from '../../helpers/mock';
import * as styles from './index.module.css';

const SamplePage = (props) => {
  const blogData = generateMockServiceData(6);

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        <Hero
          maxWidth={'400px'}
          image={'/house4Sale.jpg'}
          title={`The new standard of Closing`}
          ctaLink={'read story'}
          ctaTo={'/services/sample'}
          header={'design'}
        />

        <div className={styles.navContainer}>
          <ThemeLink
            onClick={() => navigate('/services/sample')}
            to={'/services/sample'}
          >
            All Posts
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate('/services/sample')}
            to={'/services/sample'}
          >
            Real Estate
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate('/services/sample')}
            to={'/services/sample'}
          >
            Collaboration
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate('/services/sample')}
            to={'/services/sample'}
          >
            Interview
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate('/services/sample')}
            to={'/services/sample'}
          >
            News
          </ThemeLink>
        </div>

        {/* Blog Grid */}
        <div className={styles.blogsContainer}>
          <Container size={'large'}>
            <BlogPreviewGrid data={blogData} hideReadMoreOnWeb showExcerpt />
          </Container>
        </div>
      </div>
    </Layout>
  );
};

export default SamplePage;
