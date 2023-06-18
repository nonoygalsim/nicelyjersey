import React from 'react';

import Slider from '../Slider';

import * as styles from './Gallery.module.css';

const GalleryC = (props) => {
  console.log(' GalleryC - props', props);
  const { images } = props;
  console.log(' GalleryC - images', images);
  const customSliderSettings = {
    slidesToShow: 1,
  };

  const renderImages = () => {
    return images?.map((imageObject, index) => {
      return (
        <div key={index} className={styles.imageContainer}>
          <img alt={imageObject.file.fileName} src={imageObject.file.url} />
        </div>
      );
    });
  };

  return (
    <div className={styles.root}>
      <div className={styles.cardGrid}>
        {images?.map((imageObject, index) => {
          return (
            <div key={index} className={styles.imageContainer}>
              <img alt={imageObject.file.fileName} src={imageObject.file.url} />
            </div>
          );
        })}
      </div>
      <div className={styles.mobileSlider}>
        <Slider settings={customSliderSettings}>
          {images && renderImages()}
        </Slider>
      </div>
    </div>
  );
};

export default GalleryC;
