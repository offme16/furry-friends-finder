import Input from "shared/UI/Input/Input";
import cls from "./SearchPage.module.scss";
import Dropdown from "shared/UI/Dropdown/Dropdown";
import { useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { PetsData, getPets, getUniqueFilterValues } from "enteties/PetsRegistered";
import { useSelector } from "react-redux";
import { PetsList } from "widgets/PetsList";
import { debounce }  from 'lodash';


const SearchPage = () => {
    const dispatch = useAppDispatch();
    const PetsInfo = useSelector(PetsData);
    const [inputValue, setInputValue] = useState<string>('');

    const {result, page, limit, isLoading, refs} = PetsInfo;
    
    const [filters, setFilters] = useState({
        city: '',
        genderPet: '',
        breedPet: '',
        colorPet: '',
        agePet: ''
    });

    useEffect(() => {
        dispatch(getPets({page, limit, filters}));
        dispatch(getUniqueFilterValues())
    },[dispatch, page, filters])

    const handleFilterChange = (filterName: string, value: string) => {
        const updatedFilters = { ...filters, [filterName]: value };
        setFilters(updatedFilters);
        dispatch(getPets({ page: 1, limit, filters: updatedFilters }));
    };    

    const debouncedSearch = useCallback(debounce((value: string) => {
        handleFilterChange('city', value);
    }, 500), [filters]);

    const handleCityInputChange = (value: string) => {
        setInputValue(value);
        debouncedSearch(value);
    };

    const genderItems = refs?.find(ref => ref.gender)?.gender?.map(gender => ({ label: gender, value: gender })) ?? [];
    const colorItems = refs?.find(ref => ref.colors)?.colors?.map(color => ({ label: color, value: color })) ?? [];
    const breedItems = refs?.find(ref => ref.breeds)?.breeds?.map(breed => ({ label: breed, value: breed })) ?? [];

    return (
        <div className={cls.container}>
            <h2 className={cls.title}>Домашние питомцы в добрые руки!</h2>
            <div className={cls.content}>
                <div className={cls.filter}>
                 <Input
                    placeholder="Любой город"
                    onChange={handleCityInputChange}
                    value={inputValue}>В каком городе поищем?</Input>
                    <Dropdown
                        title="Кого ищете?"
                        items={genderItems}
                        onChange = {(value) => handleFilterChange('genderPet', value)}
                    />
                    <Dropdown
                        title="Окрас"
                        items={colorItems}
                         onChange = {(value) => handleFilterChange('colorPet', value)}
                    />
                    <Dropdown
                        title="Порода"
                        items={breedItems}
                        onChange={(value) => handleFilterChange('breedPet', value)}
                    />
                </div>
                <div className={cls.petsList}>
                    <PetsList result={result} page={page} limit={limit} isLoading={isLoading} />
                </div>
            </div>
        </div>
    )
}

export default SearchPage;
