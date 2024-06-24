import { getNews, getNewsData, offsetNewsPage } from "enteties/NewsFeed";
import { useSelector } from "react-redux";
import cls from './PetsList.module.scss';
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useEffect } from "react";
import { getListPets, getPets, offsetPetsPage } from "enteties/PetsRegistered";

const PetsList = () => {
    const dispatch = useAppDispatch();

    const offset = useSelector(offsetPetsPage);

    useEffect(() => {
        dispatch(getPets(offset));
    }, [dispatch])

    const news = useSelector(getListPets); //получение данных из стора

    return (
    <div className={cls.container}>

    </div>)
}
export default PetsList;