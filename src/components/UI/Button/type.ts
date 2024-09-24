import React, { ReactNode } from 'react';

export type ButtonStyle = 'primary' | 'secondary' | 'gradient';

interface ButtonBaseProps {
  buttonStyle?: ButtonStyle;
  disabled?: boolean;
  btnClassName?: string;
  children: string | ReactNode;
  href?: string;
}

export type ButtonProps =
  | (ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | (ButtonBaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement>);

