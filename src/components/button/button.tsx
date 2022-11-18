import React, {ReactNode} from 'react';

type ButtonType = {
    children: ReactNode,
    onClick: () => void
    className?: string
    disabled?: boolean
}

const Button = ({children, onClick, className, disabled}: ButtonType) => {
    const handleOnClick = () => onClick();

    return (
        <button disabled={disabled}
                style={!disabled
                    ? {cursor: 'pointer'}
                    : {cursor: 'not-allowed'}}
                className={className}
                onClick={handleOnClick}
        >
            {children}
        </button>
    );
};

export default Button;