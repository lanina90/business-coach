import React, { ReactNode } from 'react';

export type ButtonStyle = 'primary' | 'secondary' | 'gradient';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  buttonStyle?: ButtonStyle;
  disabled?: boolean;
  href?: string;
  btnClassName?: string;
  children: ReactNode;
}
