import React from 'react';
import { Link } from '@inertiajs/react';

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    variant?: 'primary' | 'secondary';
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
    children,
    href,
    variant = 'primary',
    className = '',
    onClick,
    type = 'button'
}) => {
    const baseStyles = 'px-6 py-2 rounded-full transition-colors font-medium';
    const variantStyles = {
        primary: 'bg-[#4A3C31] hover:bg-[#3A2C21] text-white',
        secondary: 'bg-white hover:bg-gray-100 text-[#4A3C31]'
    };

    const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={buttonStyles}>
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            className={buttonStyles}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
