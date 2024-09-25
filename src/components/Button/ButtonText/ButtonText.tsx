interface ButtonTextProps {
    text: string
}

const ButtonText = ({ text }: ButtonTextProps) => {
    return <span className='flex-1'>{text}</span>
}

export default ButtonText
