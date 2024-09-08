import styles from "./container.module.css"
import classNames from 'classnames';


const Container = ({children, className}) => {
  return (
    <div className={classNames(styles.container, className && className)}>
      {children}
    </div>
  );
};

export default Container;