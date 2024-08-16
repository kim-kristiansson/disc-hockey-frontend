import classNames from 'classnames'
import { IconProps } from '../icons/IconProps.mts'
import React from 'react'

type ButtonIconProps = Omit<IconProps, 'width' | 'height'>

interface ButtonProps {
    variant?: 'login'
    iconProps?: ButtonIconProps
    icon?: React.ComponentType<IconProps>
    hidden?: boolean
    ariaLabel: string
    disabled?: boolean
    onClick: () => void
    text: string
}

const Button = ({
    variant = 'login',
    iconProps,
    icon: Icon,
    hidden,
    ariaLabel,
    disabled,
    onClick,
    text,
}: ButtonProps) => {
    const buttonClass = classNames('px-2 rounded-full', {
        'bg-spotify-green hover:bg-spotify-green-dark text-white': variant === 'login',
        'cursor-not-allowed opacity-50': disabled,
    })

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

    return (
        <button
            className={buttonClass}
            hidden={hidden}
            aria-label={ariaLabel}
            disabled={disabled}
            onClick={onClick}
        >
            <div className='p-3 flex items-center'>
                {IconWithSize && <span>{IconWithSize}</span>}
                {text}
            </div>
        </button>
    )
}

export default Button
