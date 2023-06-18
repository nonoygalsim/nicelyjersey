import React, { useState } from 'react';
import * as styles from './ProductCardGrid.module.css';

import Drawer from '../Drawer';
import ProductCardC from '../ProductCardC';
import QuickView from '../QuickView';
import Slider from '../Slider';

const ProductCardGridC = (props) => {
  const [showQuickView, setShowQuickView] = useState(false);
  const { height, columns = 3, data, spacing, showSlider = false } = props;
  console.log('ProductCardGridC - data ', data);
  const columnCount = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
  };

  const renderCards = () => {
    return data.map((product, index) => {
      console.log('ProductCardGridC - renderCards - ', product);
      return (
        <ProductCardC
          key={index}
          height={height}
          price={product.node.price}
          imageAlt={product.node.title}
          name={product.node.title}
          image={product.node.pictures[0].file.url}
          meta={product.node.desc}
          originalPrice={product.node.price}
          product={product.node}
          link={''}
          showQuickView={() => setShowQuickView(true)}
        />
      );
    });
  };

  return (
    <div className={styles.root} style={columnCount}>
      <div
        className={`${styles.cardGrid} ${
          showSlider === false ? styles.show : ''
        }`}
        style={columnCount}
      >
        {data && renderCards()}
      </div>

      {showSlider === true && (
        <div className={styles.mobileSlider}>
          <Slider spacing={spacing}>{data && renderCards()}</Slider>
        </div>
      )}

      <Drawer visible={showQuickView} close={() => setShowQuickView(false)}>
        <QuickView close={() => setShowQuickView(false)} />
      </Drawer>
    </div>
  );
};

export default ProductCardGridC;
