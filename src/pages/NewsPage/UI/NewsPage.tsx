import { getNews, getNewsData, offsetNewsPage, News } from "enteties/NewsFeed";
import { useSelector } from "react-redux";
import cls from './NewsPage.module.scss';
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useEffect, useState } from "react";
import Button from "shared/UI/Button/Button";

const NewsPage = () => {
    const dispatch = useAppDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [randomNews, setRandomNews] = useState<News[]>([]);;
    const news = useSelector(getNewsData);
    const maxcount: number = 6;
    

    useEffect(() => {
        dispatch(getNews({page: currentPage, limit: 6}));
    }, [dispatch, currentPage])

    useEffect(() => {
        if (news) {
            setRandomNews(shuffleArray(news));
        }
    }, [news]);

    const shuffleArray = (array: News[]) : News[] => {
        let shuffledArray = array.slice();
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    const handleNextPage = () => {
        if (news && news.length >= maxcount) {
            setCurrentPage(prevPage => prevPage + 1);
        }
        
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    return (
        <div className={cls.NewsPage}>
            <div className={cls.char_bg}></div>
            <div className={cls.char}></div>
            {randomNews && randomNews.length > 0 ? (
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
        
            <div className={cls.Pagination}>
                <Button onClick={handlePreviousPage} disabled={currentPage === 1} className={cls.PageButton}>
                    Назад
                </Button>
                <Button onClick={handleNextPage} disabled= {news && news.length < maxcount} className={cls.PageButton}>
                    Далее
                </Button>
            </div>
        </div>

    )
}

export default NewsPage;