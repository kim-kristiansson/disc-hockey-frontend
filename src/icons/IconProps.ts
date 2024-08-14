import { ReactNode } from "react";

type RemUnit = `${number}rem`;

export interface IconProps {
    width?: RemUnit;
    height?: RemUnit;
    color? : string;
    children?: ReactNode;
  }
  