import styles from './gradient.module.css';
import classNames from 'classnames';
import gradientShadow from "../../../assets/large-gradient-shadow.png"

const Gradient = ({ className }: { className?: string }) => {
  return (
    <img
      src={gradientShadow}
      alt="gradient"
      sizes="(max-width: 1282px) 100vw, 1282px"
      className={classNames(styles['gradient'], className)}
    />
  );
};

export default Gradient;
