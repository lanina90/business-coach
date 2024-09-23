import styles from "./container.module.css"
import classNames from 'classnames';
import {forwardRef} from "react";


const Container = forwardRef(({ children, className, ...rest }, ref) => {
  return (
    <div ref={ref} {...rest} className={classNames(styles.container, className)}>
      {children}
    </div>
  );
});

export default Container;