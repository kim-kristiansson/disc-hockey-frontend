type RemUnit = `${number}rem`;

export interface IconProps {
    width?: RemUnit;
    height?: RemUnit;
    color? : string;
    ariaLabel: string;
}