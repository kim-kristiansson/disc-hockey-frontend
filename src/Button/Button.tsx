import { ReactElement } from "react";
import { IconProps } from "../icons/IconProps";
import React from "react";

type ButtonIconProps = Omit<IconProps, 'width' | 'height' | 'children'>

interface ButtonProps {
    icon?: ReactElement<ButtonIconProps>;
    hidden?: boolean;
    ariaLabel: string;
    disabled?: boolean;
    onClick: () => void;
    text: string;
}

const Button = ({icon, hidden, ariaLabel, disabled, onClick, text}: ButtonProps) => {
    const IconWithSize = icon 
    ? React.cloneElement<IconProps>(icon, { width: '1.5rem', height: '1.5rem' }) 
    : null;

    return <button className="h-12" hidden={hidden} aria-label={ariaLabel} disabled={disabled} onClick={onClick}>{IconWithSize && <span>{IconWithSize}</span>}{text}</button>
}

export default Button