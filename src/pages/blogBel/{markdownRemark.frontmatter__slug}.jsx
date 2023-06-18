import * as React from 'react';
import { graphql , useStaticQuery} from 'gatsby';
import * as styles from './sample.module.css';

import Blog from '../../components/Blog';
import Container from '../../components/Container';
import Layout from '../../components/Layout/Layout';
export default function BlogPostTemplate({
  data
  }) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <div className={styles.root}>
        <Container>
          <div className={styles.blogContainer}>
            <Blog
              category={'design'}
              title={'Friends of Sydney: Flora Fricker'}
              image={'/blogFeatured.png'}
              alt={''}
            >
              <div className={styles.content}>
                <p className={styles.excerpt}>
                  London-based floral designer Flora Fricker champions seasonal
                  British flowers and UK producers in her beautiful and
                  sustainable creations. This season, we worked with Flora to
                  style Sunspel stores for Christmas, for which she produced
                  eye-catching sustainably sourced wreaths.
                </p>
                <p className={styles.blogParagraph}>
                  {html}
                </p>
                <p className={styles.blogParagraph}>
                  This Privacy Policy (Privacy Policy) outlines how your
                  information is collected, used and disclosed when you access
                  or use our Services as defined in our Terms. This information
                  is collected, used and disclosed in accordance with the
                  Privacy Act 1988 (Cth) (Privacy Act).
                </p>
                <p className={styles.blogParagraph}>
                  This Privacy Policy is incorporated by reference into our
                  Terms. Any capitalized terms not defined in this Policy are
                  defined in the Terms. You agree to comply with all Terms when
                  accessing or using our Services, including this Privacy
                  Policy.
                </p>
              </div>
            </Blog>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;

/*
function useHN() {
  const { hn } = useStaticQuery(graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
 `);
  return hn;
}

export { useHN };
*/