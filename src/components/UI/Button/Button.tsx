import React from 'react';
import { ButtonProps } from './type.ts';
import styles from './button.module.css';
import classNames from 'classnames';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
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

  return (
    <Component
      {...{
        ref,
        href,
        className: rootClassName,
        ...rest,
      }}
    >
      {children}
    </Component>
  );
});

export default Button;
