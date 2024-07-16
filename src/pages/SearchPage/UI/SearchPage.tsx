import Input from "shared/UI/Input/Input";
import cls from "./SearchPage.module.scss";
import Dropdown from "shared/UI/Dropdown/Dropdown";
import { useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { PetsData, getPets, getUniqueFilterValues } from "enteties/PetsRegistered";
import { useSelector } from "react-redux";
import { PetsList } from "widgets/PetsList";
import { debounce } from 'lodash';
import Button from "shared/UI/Button/Button";
import useSanitizeInput from "shared/lib/hooks/useSanitizeInput";
import ScrollToTop from "shared/lib/hooks/useScroll";

const SearchPage = () => {
    ScrollToTop();
    const dispatch = useAppDispatch();
    const PetsInfo = useSelector(PetsData);
    const [inputValue, setInputValue] = useState<string>('');
    const sanitizeInput = useSanitizeInput();

    const { result, page, limit, isLoading, refs, error } = PetsInfo;

    const [filters, setFilters] = useState({
        city: '',
        genderPet: '',
        breedPet: '',
        colorPet: '',
        agePet: ''
    });

    useEffect(() => {
        dispatch(getPets({ page, limit, filters }));
        dispatch(getUniqueFilterValues());
    }, [dispatch, page, filters]);

    const handleFilterChange = (filterName: string, value: string) => {
        const sanitizedValue = sanitizeInput(value);
        const updatedFilters = { ...filters, [filterName]: sanitizedValue };
        setFilters(updatedFilters);
        dispatch(getPets({ page: 1, limit, filters: updatedFilters }));
    };

    const debouncedSearch = useCallback(
        debounce((value: string) => {
            handleFilterChange('city', value);
        }, 500),
        [filters]
    );

    const handleCityInputChange = (value: string) => {
        const sanitizedValue = sanitizeInput(value);
        setInputValue(sanitizedValue);
        debouncedSearch(sanitizedValue);
    };

    const resetFilters = () => {
        const initialFilters = {
            city: '',
            genderPet: '',
            breedPet: '',
            colorPet: '',
            agePet: ''
        };
        setFilters(initialFilters);
        setInputValue('');
        dispatch(getPets({ page: 1, limit, filters: initialFilters }));
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
                        value={inputValue}
                    />
                    <Dropdown
                        title="Кого ищете?"
                        items={genderItems}
                        selectedValue={filters.genderPet}
                        onChange={(value) => handleFilterChange('genderPet', value)}
                    />
                    <Dropdown
                        title="Окрас"
                        items={colorItems}
                        selectedValue={filters.colorPet}
                        onChange={(value) => handleFilterChange('colorPet', value)}
                    />
                    <Dropdown
                        title="Порода"
                        items={breedItems}
                        selectedValue={filters.breedPet}
                        onChange={(value) => handleFilterChange('breedPet', value)}
                    />
                    <Button onClick={resetFilters}>Сбросить все фильтры</Button>
                </div>
                <div className={cls.petsList}>
                    {error ? (
                        <div className={cls.error}>
                            <p>К сожалению, по вашему запросу ничего не найдено.</p>
                            <p>Попробуйте изменить параметры фильтра или воспользоваться другим поисковым запросом.</p>
                        </div>
                    ) : (
                        <PetsList result={result} page={page} limit={limit} isLoading={isLoading} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
