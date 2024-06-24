import React from 'react';
import Button from 'shared/UI/Button/Button';
import clsx from 'clsx';
import cls from './PageError.module.scss';

export interface PageErrorProps {
    className?: string;
}
const PageError = ({ className }: PageErrorProps) => {
    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={clsx(cls.PageError, {}, [className])}>
            <h1>Произошла ошибка!</h1>
            <Button onClick={reloadPage}>
            Обновить страницу
            </Button>
        </div>
    );
};

export default PageError;