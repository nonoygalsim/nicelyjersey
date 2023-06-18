import React, { useState, useContext, useEffect } from 'react';
import * as styles from './sample.module.css';

import Accordion from '../../components/Accordion';
import AdjustItem from '../../components/AdjustItem';
import Button from '../../components/Button';
import Breadcrumbs from '../../components/Breadcrumbs';
import Container from '../../components/Container';
import CurrencyFormatter from '../../components/CurrencyFormatter';
//import Gallery from '../../components/Gallery';
import GalleryC from '../../components/GalleryC';
import SizeList from '../../components/SizeList';
import Split from '../../components/Split';
import SwatchList from '../../components/SwatchList';
import Layout from '../../components/Layout/Layout';

import { generateMockProductData } from '../../helpers/mock';
import Icon from '../../components/Icons/Icon';
import ProductCardGrid from '../../components/ProductCardGrid';
import { navigate } from 'gatsby';

import AddItemNotificationContext from '../../context/AddItemNotificationProvider';

const ProductPage = (props) => {
  const ctxAddItemNotification = useContext(AddItemNotificationContext);
  const [activeProduct, setActiveProduct] = useState();
  console.log(' sampleC ProductPage props ', props);
  let product =
    props.location.state && props.location.state.product
      ? props.location.state.product
      : null;
  console.log(' sampleC ProductPage product ', product);
  if (!product && activeProduct) {
    product = activeProduct;
  }
  console.log(' sampleC ProductPage product 2 ', product);
  const showNotification = ctxAddItemNotification.product;
  const sampleProduct = generateMockProductData(1, 'sample')[0];
  const [qty, setQty] = useState(0);
  const [isWishlist, setIsWishlist] = useState(false);
  const [activeSwatch, setActiveSwatch] = useState(
    sampleProduct.colorOptions[0]
  );
  const [activeSize, setActiveSize] = useState(sampleProduct.sizeOptions[0]);
  const suggestions = generateMockProductData(4, 'woman');

  const snipCartItem = product
    ? {
        dataitemid: 1,
        dataitemname: product.title,
        dataitemprice: product.price,
        dataitemdescription: product.desc,
        dataitemimage: product.pictures[0].file.url,
      }
    : null;
  // disable active menu when show menu is hidden
  useEffect(() => {
    console.log(' sampleC useefeffect product', product);
    console.log(' sampleC useefeffect activeProduct', activeProduct);
    if (product) setActiveProduct(product);
  }, []);

  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <Breadcrumbs
            crumbs={[
              { link: '/', label: 'Home' },
              { label: 'Men', link: '/shop' },
              { label: 'Sweater', link: '/shop' },
              { label: `${sampleProduct.name}` },
            ]}
          />
          <div className={styles.content}>
            <div className={styles.gallery}>
              <GalleryC images={product ? product.pictures : null} />
            </div>
            <div className={styles.details}>
              <h1>{product && product.title ? product.title : 'no product'}</h1>
              <span className={styles.vendor}>
                {' '}
                details {product && product.desc ? product.desc : 'no product'}
              </span>
              <div className={styles.priceContainer}>
                <CurrencyFormatter
                  appendZero
                  amount={
                    product && product.price ? product.price : 'no product'
                  }
                />
              </div>

              <div>SwatchList</div>

              <div className={styles.sizeContainer}>
                <span>size</span>
                {product && product.size ? product.size : 'no product'}
              </div>

              <div className={styles.quantityContainer}>
                <span>Quantity</span>
                <AdjustItem qty={qty} setQty={setQty} />
              </div>

              <div className={styles.actionContainer}>
                <div className={styles.addToButtonContainer}>
                  <Button
                    onClick={() => showNotification()}
                    fullWidth
                    level={'primary'}
                    snipCartItem={snipCartItem}
                    snipCartClass="snipcart-add-item"
                  >
                    Add to Bag
                  </Button>
                </div>
                <div
                  className={styles.wishlistActionContainer}
                  role={'presentation'}
                  onClick={() => setIsWishlist(!isWishlist)}
                >
                  <Icon symbol={'heart'}></Icon>
                  <div
                    className={`${styles.heartFillContainer} ${
                      isWishlist === true ? styles.show : styles.hide
                    }`}
                  >
                    <Icon symbol={'heartFill'}></Icon>
                  </div>
                </div>
              </div>

              <div className={styles.description}>
                <p>{sampleProduct.description}</p>
                <span>Product code: {sampleProduct.productCode}</span>
              </div>

              <div className={styles.informationContainer}>
                <Accordion
                  type={'plus'}
                  customStyle={styles}
                  title={'composition & care'}
                >
                  <p className={styles.information}>
                    {product && product.useage ? product.useage : 'no product'}
                  </p>
                </Accordion>
                <Accordion
                  type={'plus'}
                  customStyle={styles}
                  title={'delivery & returns'}
                >
                  <p className={styles.information}>
                    {sampleProduct.description}
                  </p>
                </Accordion>
                <Accordion type={'plus'} customStyle={styles} title={'help'}>
                  <p className={styles.information}>
                    {sampleProduct.description}
                  </p>
                </Accordion>
              </div>
            </div>
          </div>
          <div className={styles.suggestionContainer}>
            <h2>You may also like</h2>
            <ProductCardGrid
              spacing
              showSlider
              height={400}
              columns={4}
              data={suggestions}
            />
          </div>
        </Container>

        <div className={styles.attributeContainer}>
          <Split
            image={'/cloth.png'}
            alt={'attribute description'}
            title={'Sustainability'}
            description={
              'We design our products to look good and to be used on a daily basis. And our aim is to inspire people to live with few timeless objects made to last. This is why quality over quantity is a cornerstone of our ethos and we have no interest in trends or seasonal collections.'
            }
            ctaText={'learn more'}
            cta={() => navigate('/blog')}
            bgColor={'var(--standard-light-grey)'}
          />
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
