import React from 'react';
import { IconProps } from './IconProps';

interface BaseIconProps extends IconProps {
    children: React.ReactNode;
}

const BaseIcon = ({
  width = '4rem',
  height = '4rem',
  color = 'black',
  children,
}: BaseIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 64 64"
    fill={color}
    role='icon'
    style={{ width: width, height: height }}
  >
    {children}
  </svg>
);

export default BaseIcon;
