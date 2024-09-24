import React, { ReactNode } from 'react';

export type ButtonStyle = 'primary' | 'secondary' | 'gradient';

interface ButtonBaseProps {
  buttonStyle?: ButtonStyle;
  disabled?: boolean;
  btnClassName?: string;
  children: ReactNode;
  href?: string;
}

export type ButtonElementProps = ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>;
export type AnchorElementProps = ButtonBaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

