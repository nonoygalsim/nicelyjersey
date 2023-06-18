import React, { useState, useEffect } from 'react';
import * as styles from './shop.module.css';

import Banner from '../components/Banner';
import Breadcrumbs from '../components/Breadcrumbs';
import CardController from '../components/CardController';
import Container from '../components/Container';
import Chip from '../components/Chip';
import Icon from '../components/Icons/Icon';
import Layout from '../components/Layout';
import LayoutOption from '../components/LayoutOption';
import ProductCardGridC from '../components/ProductCardGridC';
import { generateMockProductData } from '../helpers/mock';
import Button from '../components/Button';
import Config from '../config.json';
import { graphql, useStaticQuery } from 'gatsby';

const ShopPageC = (shopC) => {
  const [showFilter, setShowFilter] = useState(false);
  //const data = generateMockProductData(6, 'woman');
  const data = shopC.data.allContentfulHumanNature.edges;
  console.log('ShopPage - dataHN', data);
  useEffect(() => {
    window.addEventListener('keydown', escapeHandler);
    return () => window.removeEventListener('keydown', escapeHandler);
  }, []);

  const escapeHandler = (e) => {
    if (e?.keyCode === undefined) return;
    if (e.keyCode === 27) setShowFilter(false);
  };

  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.breadcrumbContainer}>
            <Breadcrumbs
              crumbs={[
                { link: '/', label: 'Home' },
                { link: '/', label: 'Beauty and Health' },
                { label: 'Perfumes & Deodorants' },
              ]}
            />
          </div>
        </Container>
        <Banner
          maxWidth={'650px'}
          name={`Beauty and Health`}
          subtitle={
            'Look to proven beauty and health aids. From midis in bold prints to dramatic floor-sweeping styles and easy all-in-ones, our edit covers every mood.'
          }
        />
        <Container size={'large'} spacing={'min'}>
          <div className={styles.metaContainer}>
            <span className={styles.itemCount}>476 items</span>
            <div className={styles.controllerContainer}>
              <div
                className={styles.iconContainer}
                role={'presentation'}
                onClick={() => setShowFilter(!showFilter)}
              >
                <Icon symbol={'filter'} />
                <span>Filters</span>
              </div>
              <div
                className={`${styles.iconContainer} ${styles.sortContainer}`}
              >
                <span>Sort by</span>
                <Icon symbol={'caret'} />
              </div>
            </div>
          </div>
          <CardController
            closeFilter={() => setShowFilter(false)}
            visible={showFilter}
            filters={Config.filters}
          />
          <div className={styles.chipsContainer}>
            <Chip name={'XS'} />
            <Chip name={'S'} />
          </div>
          <div className={styles.productContainer}>
            <span className={styles.mobileItemCount}>476 items</span>
            <ProductCardGridC data={data}></ProductCardGridC>
          </div>
          <div className={styles.loadMoreContainer}>
            <span>6 of 456</span>
            <Button fullWidth level={'secondary'}>
              LOAD MORE
            </Button>
          </div>
        </Container>
      </div>

      <LayoutOption />
    </Layout>
  );
};

export const productPageQuery = graphql`
  query contentNot {
    allContentfulHumanNature {
      edges {
        node {
          title
          id
          title
          tag
          desc
          price
          useage
          size
          tag

          pictures {
            file {
              url
              fileName
              contentType
            }
          }
        }
      }
    }
  }
`;

export default ShopPageC;
