import styles from "./container.module.css"
import classNames from 'classnames';
import {forwardRef, HTMLAttributes} from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(({ children, className, ...rest }, ref) => {
  return (
    <div ref={ref} {...rest} className={classNames(styles.container, className)}>
      {children}
    </div>
  );
});

export default Container;