import React from 'react';
import {InputProps} from "./types.ts";
import styles from "./input.module.css"
import classNames from "classnames";

const Input: React.FC<InputProps> = ({error, label, icon, id, classes, ...props}) => {
  return (
    <div className={classNames(styles["container"], classes?.root)}>
      {label && (
        <label htmlFor={id} className={classNames(styles["container-label"], classes?.label)}>
          {label}
        </label>
      )}
      <div className={styles["container-input-wrapper"]}>
        <input
          id={id}
          {...props}
          className={classNames(
            styles["container-input"],
            classes?.input
          )}
        />
        {icon && <span className={classNames(styles["container-icon"], classes?.icon)}>{icon}</span>}
        {error && <span className={styles.error}>{error}</span>}
      </div>

    </div>
  );
};

export default Input;