import React from 'react';
import { AnchorElementProps, ButtonElementProps } from './type.ts';
import styles from './button.module.css';
import classNames from 'classnames';

const Button: React.FC<ButtonElementProps | AnchorElementProps> = (props) => {
  const { buttonStyle, href, disabled = false, children, btnClassName, ...rest } = props;

  const Component = href ? 'a' : 'button';

  const rootClassName = classNames(
    {
      [styles[`button`]]: true,
      [styles[`button-href`]]: !!href,
      [styles[`button-${buttonStyle}`]]: buttonStyle && !disabled,
      [styles[`button-root-disabled`]]: disabled,
    },
    btnClassName
  );

  if (href) {
    return (
      <a className={rootClassName} href={href} {...(rest as AnchorElementProps)}>
        {children}
      </a>
    );
  }

  return (
    <button className={rootClassName} disabled={disabled} {...(rest as ButtonElementProps)}>
      {children}
    </button>
  );
};

export default Button;
