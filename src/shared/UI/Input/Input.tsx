import React, { InputHTMLAttributes, memo } from 'react';
import clsx from 'clsx';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>
interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    children?: string;
}

const Input = memo((props: InputProps) => {
    const {
        className,
        children,
        value,
        onChange,
        type = 'text',
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };
    return (
        <div className={cls.inputBox}>
            <h3>{children}</h3>
            <input
            className={clsx(cls.Input, {}, [className])}
            type={type}
            value={value}
            onChange={onChangeHandler}
            {...otherProps}
        />
        </div>
        
    );
});

export default Input;