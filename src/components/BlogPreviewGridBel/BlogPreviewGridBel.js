import React from 'react';
import * as styles from './BlogPreviewGrid.module.css';

import BlogPreviewBel from '../BlogPreviewBel';

const BlogPreviewGridBel = (props) => {
  const { data, hideReadMoreOnWeb, showExcerpt, markData } = props;

  return (
    <div className={styles.root}>
      <div>hello</div>
      {markData &&
        markData.map((blog, index) => {
          console.log('  BlogPreviewGridBel blog ', blog);
          return (
            <BlogPreviewBel
              key={index}
              image={blog.node.frontmatter.featuredimage}
              altImage={'this is not found'}
              title={blog.node.frontmatter.title}
              link={blog.node.frontmatter.link}
              category={''}
              excerpt={blog.node.frontmatter.description}
              hideReadMoreOnWeb={hideReadMoreOnWeb}
              showExcerpt={showExcerpt}
            />
          );
        })}
    </div>
  );
};

export default BlogPreviewGridBel;
