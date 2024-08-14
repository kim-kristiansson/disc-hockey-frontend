import { IconProps } from "../icons/IconProps";
import React from "react";

type ButtonIconProps = Omit<IconProps, 'width' | 'height'>

interface ButtonProps {
    iconProps?: ButtonIconProps;
    icon?: React.ComponentType<IconProps>;
    hidden?: boolean;
    ariaLabel: string;
    disabled?: boolean;
    onClick: () => void;
    text: string;
}

const Button = ({iconProps, icon: Icon, hidden, ariaLabel, disabled, onClick, text}: ButtonProps) => {
    const IconWithSize = Icon ? <Icon width="1.5rem" height="1.5rem" ariaLabel="Button Icon (No label specified)" {...iconProps} /> : null;

    return <button className="h-12" hidden={hidden} aria-label={ariaLabel} disabled={disabled} onClick={onClick}>{IconWithSize && <span>{IconWithSize}</span>}{text}</button>
}

export default Button