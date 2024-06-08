import React from 'react';
import cls from './PageNotFound.module.scss';
import Text, { TextTheme } from 'shared/UI/Text/Text';

const PageNotFound = () => (
    <div className={cls.PageNotFound}>
        <Text text="Страница не найдена" theme={TextTheme.ERROR}/>
    </div>
);

export default PageNotFound;