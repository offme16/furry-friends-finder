import Input from "shared/UI/Input/Input";
import cls from "./SearchPage.module.scss";
import Dropdown from "shared/UI/Dropdown/Dropdown";
import { useEffect, useState } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { PetsData, getPets } from "enteties/PetsRegistered";
import { useSelector } from "react-redux";
import { PetsList } from "widgets/PetsList";
import { searchPets } from "enteties/PetsRegistered/model/service/searchPets";

const SearchPage = () => {
    const dispatch = useAppDispatch();
    const PetsInfo = useSelector(PetsData);
    const {result, page, limit, isLoading} = PetsInfo;

    const [filters, setFilters] = useState({
        city: '',
        genderPet: '',
        breedPet: '',
        colorPet: '',
        agePet: ''
    });

    useEffect(() => {
        dispatch(getPets({page, limit}));
    },[dispatch, page])

    const handleFilterChange = (filterName: string, value: string) => {
        const updatedFilters = { ...filters, [filterName]: value };
        setFilters(updatedFilters);
        dispatch(searchPets(updatedFilters));
    };

    const genderItems = result ? Array.from(new Set(result.map(pet => pet.genderPet))).map(gender => ({ label: gender, value: gender })) : [];
    const colorItems = result ? Array.from(new Set(result.map(pet => pet.colorPet))).map(color => ({ label: color, value: color })) : [];
    const breedItems = result ? Array.from(new Set(result.map(pet => pet.breedPet))).map(breed => ({ label: breed, value: breed })) : [];

    return (
        <div className={cls.container}>
            <h2 className={cls.title}>Домашние питомцы в добрые руки!</h2>
            <div className={cls.content}>
                <div className={cls.filter}>
                    <Input placeholder="Любой город"></Input>
                    <Dropdown title="Кого ищете?" items={genderItems} onChange = {(value) => handleFilterChange('genderPet', value)}/>
                    <Dropdown title="Окрас" items={colorItems} onChange = {(value) => handleFilterChange('colorPet', value)}/>
                    <Dropdown title="Порода" items={breedItems} onChange={(value) => handleFilterChange('breedPet', value)}/>
                </div>
                <div className={cls.petsList}>
                    <PetsList result={result} page={page} limit={limit} isLoading={isLoading} />
                </div>
            </div>
        </div>
    )
}

export default SearchPage;
