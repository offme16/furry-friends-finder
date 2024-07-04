import Input from "shared/UI/Input/Input";
import cls from "./SearchPage.module.scss";
import Dropdown from "shared/UI/Dropdown/Dropdown";
import { useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { getListPets, getPets, offsetPetsPage } from "enteties/PetsRegistered";
import { useSelector } from "react-redux";

const SearchPage = () => {
    const dispatch = useAppDispatch();
    const offset = useSelector(offsetPetsPage);
    const colorPet = useSelector(getListPets);

    useEffect(() => {
        dispatch(getPets(offset));
    },[dispatch])

    const animalItems = [
        { label: 'Кот', value: 'cat' },
        { label: 'Собака', value: 'dog' }
    ];

    const colorItems = [
        { label: 'Белый', value: 'white' },
        { label: 'Черный', value: 'black' },
        { label: 'Рыжий', value: 'ginger' }
    ];


    return (
        <div className={cls.container}>
            <h2 className={cls.header}>Домашние питомцы в добрые руки!</h2>
            <div className={cls.content}>
                <div className={cls.filter}>
                    <Input placeholder="Любой город"></Input>
                    <Dropdown title="Кого ищете?" items={animalItems} />
                    <Dropdown title="Окрас" items={colorItems} />
                </div>
                <div className={cls.petsList}>
                    Список питомцев
                </div>
            </div>
        </div>
    )
}

export default SearchPage;
