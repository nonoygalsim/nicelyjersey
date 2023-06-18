import React from 'react';
import { Link } from 'gatsby';

import * as styles from './Button.module.css';

const Button = ({
  children,
  href,
  target,
  level,
  type,
  size,
  disabled,
  onClick,
  className,
  flat,
  link,
  fullWidth,
  theme,
  snipCartItem,
  snipCartClass,
}) => {
  const classes = level ? [styles.button] : [styles.link];

  if (level in styles) {
    classes.push(styles[level]);
  }
  if (size in styles) {
    classes.push(styles[size]);
  }
  if (theme in styles) {
    classes.push(styles[theme]);
  }

  if (disabled) {
    classes.push(styles.disabled);
  }
  if (flat) {
    classes.push(styles.flat);
  }
  if (link) {
    classes.push(styles.link);
  }
  if (fullWidth) {
    classes.push(styles.fullWidth);
  }
  if (className) {
    classes.push(className);
  }

  const classOutput = classes.join(' ');
  console.log(' snipCartItem', snipCartItem);
  return (
    <>
      {href && target && (
        <a
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className={classOutput}
          onClick={onClick}
        >
          {children}
        </a>
      )}
      {href && !target && (
        <Link to={href} className={classOutput} onClick={onClick}>
          {children}
        </Link>
      )}
      {!href && (
        <button
          className={classOutput + ' ' + snipCartClass ? snipCartClass : ''}
          type={type}
          disabled={disabled}
          data-item-id={
            snipCartItem && snipCartItem.dataitemid
              ? snipCartItem.dataitemid
              : ''
          }
          data-item-name={
            snipCartItem && snipCartItem.dataitemname
              ? snipCartItem.dataitemname
              : ''
          }
          data-item-price={
            snipCartItem && snipCartItem.dataitemprice
              ? snipCartItem.dataitemprice
              : ''
          }
          data-item-description={
            snipCartItem && snipCartItem.dataitemdesc
              ? snipCartItem.dataitemdesc
              : ''
          }
          data-item-image={
            snipCartItem && snipCartItem.dataitemimage
              ? snipCartItem.dataitemimage
              : ''
          }
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
