import React from 'react';
import { navigate } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';

import BlogPreviewGridBel from '../../components/BlogPreviewGridBel';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Layout from '../../components/Layout/Layout';
import ThemeLink from '../../components/ThemeLink';

import { generateMockBlogData } from '../../helpers/mock';
import * as styles from './index.module.css';

const BlogPageBel = (props) => {
  const blogData = generateMockBlogData(6);
  console.log(' BlogPage Bel props =', props);
  const markData = props.data.allMarkdownRemark.edges;
  console.log(' BlogPage Bel markData =', markData);
  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        <Hero
          maxWidth={'400px'}
          image={'/house4Sale.jpg'}
          title={`The new standard of Closing`}
          ctaLink={'read story'}
          ctaTo={'/blog/sample'}
          header={'design'}
        />

        <div className={styles.navContainer}>
          <ThemeLink
            onClick={() => navigate('/blog/sample')}
            to={'/blog/sample'}
          >
            All Posts
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate('/blog/sample')}
            to={'/blog/sample'}
          >
            Real Estate
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate('/blog/sample')}
            to={'/blog/sample'}
          >
            Collaboration
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate('/blog/sample')}
            to={'/blog/sample'}
          >
            Interview
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate('/blog/sample')}
            to={'/blog/sample'}
          >
            News
          </ThemeLink>
        </div>

        {/* Blog Grid */}
        <div className={styles.blogsContainer}>
          <Container size={'large'}>
            <BlogPreviewGridBel
              data={blogData}
              markData={markData}
              hideReadMoreOnWeb
              showExcerpt
            />
          </Container>
        </div>
      </div>
    </Layout>
  );
};
export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { slug: { ne: null } } }) {
      edges {
        node {
          frontmatter {
            description
            featuredpost
            slug
            date
            featuredimage
            tags
            title
            link
          }
          headings {
            value
          }
          html
        }
      }
    }
  }
`;

export default BlogPageBel;
