import classNames from 'classnames'
import { IconProps } from '../../icons/IconProps.ts'
import React from 'react'
import ButtonText from './ButtonText/ButtonText.tsx'
import ButtonIcon from './ButtonIcon/ButtonIcon.tsx'

type ButtonIconProps = Omit<IconProps, 'width' | 'height'>

interface ButtonProps {
    type: 'button' | 'submit' | 'reset'
    variant?: 'login'
    iconProps?: ButtonIconProps
    icon?: React.ComponentType<IconProps>
    hidden?: boolean
    ariaLabel: string
    disabled?: boolean
    onClick?: () => void
    text: string
}

const Button = ({
    type,
    variant = 'login',
    iconProps,
    icon: Icon,
    hidden,
    ariaLabel,
    disabled,
    onClick,
    text,
}: ButtonProps) => {
    const buttonClass = classNames(
        'rounded-full flex items-center pt-3 pb-3 pr-6 pl-6 max-w-full w-full',
        {
            'bg-spotify-green hover:bg-spotify-green-dark text-white': variant === 'login',
            'cursor-not-allowed opacity-50': disabled,
        }
    )

    return (
        <button
            type={type}
            className={buttonClass}
            hidden={hidden}
            aria-label={ariaLabel}
            disabled={disabled}
            onClick={onClick}
        >
            {Icon && (
                <ButtonIcon
                    icon={Icon}
                    iconProps={iconProps}
                    disabled={disabled}
                    variant={variant}
                />
            )}
            <ButtonText text={text} />
        </button>
    )
}

export default Button
