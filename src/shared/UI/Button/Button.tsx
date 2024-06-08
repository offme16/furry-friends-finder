import React, { ButtonHTMLAttributes, FC } from 'react';
import clsx from 'clsx';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
}
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    disabled?: boolean;
    theme?: ThemeButton;
}

const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = ThemeButton.CLEAR,
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
            className={clsx(cls.Button, className, [cls[theme]], mods)}
        >
            {children}
        </button>
    );
};

export default Button;