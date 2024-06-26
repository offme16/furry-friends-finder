import { getNews, getNewsData, offsetNewsPage } from "enteties/NewsFeed";
import { useSelector } from "react-redux";
import cls from './NewsPage.module.scss';
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useEffect } from "react";

const NewsPage = () => {
    const dispatch = useAppDispatch();

    const offset = useSelector(offsetNewsPage);

    useEffect(() => {
        dispatch(getNews(offset));
    }, [dispatch])

    const news = useSelector(getNewsData); //получение данных из стора
    return (
        <div className={cls.container}>

        </div>
    )
}
export default NewsPage;