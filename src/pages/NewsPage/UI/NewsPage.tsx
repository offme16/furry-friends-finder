import { getNews, getNewsData, News } from "enteties/NewsFeed";
import { useSelector } from "react-redux";
import cls from './NewsPage.module.scss';
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useEffect, useState } from "react";
import Pagination from "shared/UI/Pagination/Pagination";
import Loader from "shared/UI/Loader/Loader";
import { NewsFeedSliceActions } from "enteties/NewsFeed/model/slice/NewsFeedSlice";

const NewsPage = () => {
    const dispatch = useAppDispatch();
    const [randomNews, setRandomNews] = useState<News[]>([]);;
    const newsInfo = useSelector(getNewsData);
    const {result, page, limit, isLoading} = newsInfo;
    
    const handleSetPage = (page: number) => {
        dispatch(NewsFeedSliceActions.setPage(page));
    };

    useEffect(() => {
        dispatch(getNews({page, limit}));
    }, [dispatch, page]);

    useEffect(() => {
        if (result) {
            setRandomNews(shuffleArray(result));
        }
    }, [result]);

    const shuffleArray = (array: News[]) : News[] => {
        let shuffledArray = array.slice();
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    return (
        <div className={cls.NewsPage}>
            <div className={cls.char_bg}></div>
            <div className={cls.char}></div>
            {isLoading ? <Loader />: randomNews && randomNews.length > 0 ? (
                <div className = {cls.NewsGrid}>
                    {randomNews.map((item) => (
                        <div key = {item.id} className = {cls.NewsItem}>
                            <img src = {item.url} alt = {`news-${item.id}`} className = {cls.NewsImage} />
                            <p className = {cls.NewsFact}> {item.fact} </p>
                        </div>
                    ))}    
                </div>
            ) : (
                <p>No news available</p>
            )}

            <Pagination
                className={cls.Pagination}
                currentPage={page}
                totalItems={result ? result.length : 0}
                maxcount={limit}
                onPageChange={handleSetPage}
            />
            
        </div>

    )
}

export default NewsPage;