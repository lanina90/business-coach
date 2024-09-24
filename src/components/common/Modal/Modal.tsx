import styles from './styles.module.css';
import { ReactNode } from 'react';

const Modal = ({ children }:{ children: ReactNode }) => {
  return <div className={styles['modal']}>{children}</div>;
};

export default Modal;
