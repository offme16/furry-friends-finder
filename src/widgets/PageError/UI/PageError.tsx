import React from 'react';
import Button from 'shared/UI/Button/Button';
import clsx from 'clsx';
import Text, { TextTheme } from 'shared/UI/Text/Text';
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
            <Text text="Произошла ошибка" theme={TextTheme.ERROR} />
            <Button onClick={reloadPage}>
                <Text text="Обновить страницу" theme={TextTheme.PRIMARY} />
            </Button>
        </div>
    );
};

export default PageError;