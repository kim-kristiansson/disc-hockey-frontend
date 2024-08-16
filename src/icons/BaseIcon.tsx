import React from 'react'
import { IconProps } from './IconProps.mts'

interface BaseIconProps extends IconProps {
    children: React.ReactNode
}

const BaseIcon = ({
    width = '4rem',
    height = '4rem',
    color = 'black',
    children,
    ariaLabel = 'Icon (Label not specified)',
}: BaseIconProps) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width={width}
        height={height}
        viewBox='0 0 64 64'
        fill={color}
        role='img'
        style={{
            width: width,
            height: height,
            margin: `calc(${width} / 2) calc(${height} / 2)`,
        }}
        aria-label={ariaLabel}
    >
        {children}
    </svg>
)

export default BaseIcon
