import React, { ButtonHTMLAttributes, FC } from 'react';
import clsx from 'clsx';
import cls from './Button.module.scss';


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    disabled?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        disabled,
        ...otherProps
    } = props;

    const mods: Record<string, undefined | boolean> = {
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            {...otherProps}
            disabled={disabled}
            className={clsx(cls.Button, className, mods)}
        >
            {children}
        </button>
    );
};

export default Button;