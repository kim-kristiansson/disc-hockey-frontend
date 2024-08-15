import classNames from "classnames";
import { IconProps } from "../icons/IconProps";
import React from "react";

type ButtonIconProps = Omit<IconProps, "width" | "height">;

interface ButtonProps {
    variant?: "login";
    iconProps?: ButtonIconProps;
    icon?: React.ComponentType<IconProps>;
    hidden?: boolean;
    ariaLabel: string;
    disabled?: boolean;
    onClick: () => void;
    text: string;
}

const buttonStyles = {
    variants: {
        login: "bg-spotify-green hover:bg-spotify-green-dark text-white",
    },
    disabled: "cursor-not-allowed opacity-50",
};

const getIconColor = (variant: string | undefined) => {
    switch (variant) {
        case "login":
            return "#FFFFFF";
        default:
            return "currentColor";
    }
};

const Button = ({
    variant = "login",
    iconProps,
    icon: Icon,
    hidden,
    ariaLabel,
    disabled,
    onClick,
    text,
}: ButtonProps) => {
    const IconWithSize = Icon ? (
        <Icon
            width="1.5rem"
            height="1.5rem"
            color={getIconColor(variant)}
            ariaLabel={
                iconProps?.ariaLabel || "Button Icon (No label specified)"
            }
        />
    ) : null;
    const buttonClass = classNames("h-12", buttonStyles.variants[variant], {
        [buttonStyles.disabled]: disabled,
    });

    return (
        <button
            className={buttonClass}
            hidden={hidden}
            aria-label={ariaLabel}
            disabled={disabled}
            onClick={onClick}
        >
            {IconWithSize && <span>{IconWithSize}</span>}
            {text}
        </button>
    );
};

export default Button;
