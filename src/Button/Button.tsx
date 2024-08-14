import { ReactElement } from "react";
import { IconProps } from "../icons/IconProps";
import React from "react";

interface ButtonProps {
    icon?: ReactElement<IconProps>;
    hidden?: boolean;
    ariaLabel: string;
    disabled?: boolean;
    onClick: () => void;
    text: string;
}

const Button = ({icon, hidden, ariaLabel, disabled, onClick, text}: ButtonProps) => {
    const IconWithSize = icon 
    ? React.cloneElement(icon, { width: 24, height: 24 }) 
    : null;

    return <button className="h-12" hidden={hidden} aria-label={ariaLabel} disabled={disabled} onClick={onClick}>{IconWithSize && <span>{IconWithSize}</span>}{text}</button>
}

export default Button