import React from 'react'
import { IconProps } from './IconProps'

type ViewBox = `0 0 ${number} ${number}`

interface BaseIconProps extends IconProps {
    children: React.ReactNode
    viewBox: ViewBox
}

const BaseIcon = ({
    width = '4rem',
    height = '4rem',
    color = 'black',
    children,
    ariaLabel = 'Icon (Label not specified)',
    viewBox,
    style,
}: BaseIconProps) => (
    <svg
        viewBox={viewBox}
        xmlns='http://www.w3.org/2000/svg'
        width={width}
        height={height}
        fill={color}
        role='img'
        aria-label={ariaLabel}
        style={style}
    >
        {children}
    </svg>
)

export default BaseIcon
