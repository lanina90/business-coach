import React from 'react';
import styles from './gradient.module.css';
import classNames from 'classnames';

const Gradient = ({ className }: { className?: string }) => {
  return (
    <img
      src="/src/assets/large-gradient-shadow.png"
      alt="gradient"
      sizes="(max-width: 1282px) 100vw, 1282px"
      className={classNames(styles['gradient'], className)}
    />
  );
};

export default Gradient;
