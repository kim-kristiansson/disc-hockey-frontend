import classNames from 'classnames'

export interface ErrorMessageProps {
    message: string
    type?: 'error' | 'warning' | 'info'
    isVisible?: boolean
}

const ErrorMessage = ({ message, type = 'info', isVisible = true }: ErrorMessageProps) => {
    const messageClassNames = classNames(
        'p-3 rounded-md border',
        {
            'text-red-500 bg-red-100 border-red-500': type === 'error',
            'text-yellow-600 bg-yellow-100 border-yellow-500': type === 'warning',
            'text-blue-500 bg-blue-100 border-blue-500': type === 'info',
        },
        {
            'opacity-0': !isVisible,
            'opacity-100': isVisible,
        }
    )

    return isVisible ? <div className={messageClassNames}>{message}</div> : null
}

export default ErrorMessage
