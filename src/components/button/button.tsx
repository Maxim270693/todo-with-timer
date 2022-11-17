import React, {ReactNode} from 'react';

type ButtonType = {
    children: ReactNode,
    onClick: () => void
    className?: string
}

const Button = ({children, onClick, className}: ButtonType) => {
    const handleOnClick = () => onClick();

    return (
        <button className={className}
                onClick={handleOnClick}
        >
            {children}
        </button>
    );
};

export default Button;