import React, { ReactNode } from 'react';

export type ButtonStyle = 'primary' | 'secondary' | 'gradient';

interface ButtonBaseProps {
  buttonStyle?: ButtonStyle;
  disabled?: boolean;
  btnClassName?: string;
  children: ReactNode;
}

export type ButtonProps =
  | (ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | (ButtonBaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement>);

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//     React.AnchorHTMLAttributes<HTMLAnchorElement> {
//   buttonStyle?: ButtonStyle;
//   disabled?: boolean;
//   href?: string;
//   btnClassName?: string;
//   children: ReactNode;
// }
