import React from 'react';

export type ButtonStyle = "primary" | "secondary" | "gradient";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  buttonStyle?: ButtonStyle;
  disabled?: boolean
  href?: string;
}