import React from 'react'
import { IconProps } from '../../../icons/IconProps'

interface ButtonIconProps {
    icon?: React.ComponentType<IconProps>
    iconProps?: IconProps
    disabled?: boolean
    variant?: 'login'
}

const ButtonIcon = ({ icon: Icon, iconProps, disabled, variant }: ButtonIconProps) => {
    const iconColor = disabled ? '#A0AEC0' : variant === 'login' ? '#FFFFFF' : '#000000'

    const IconWithSize = Icon ? (
        <Icon
            width='1.5rem'
            height='1.5rem'
            color={iconColor}
            ariaLabel={iconProps?.ariaLabel || 'Button Icon (No label specified)'}
            style={{
                marginRight: `calc(${'1.5rem'} / 2)`,
            }}
        />
    ) : null

    return <span>{IconWithSize}</span>
}

export default ButtonIcon
