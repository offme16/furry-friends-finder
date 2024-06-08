import clsx from 'clsx';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}
export interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme,
}
const Text = (props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextTheme.PRIMARY,
    } = props;
    return (
        <div className={clsx(cls.Text, { [cls[theme]]: true }, [className])}>
            { title && <p className={cls.title}>{title}</p>}
            { text && <p className={cls.text}>{text}</p>}
        </div>
    );
};

export default Text;