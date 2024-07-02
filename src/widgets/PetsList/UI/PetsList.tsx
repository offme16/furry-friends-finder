import { useSelector } from "react-redux";
import cls from './PetsList.module.scss';
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useEffect, useState } from "react";
import { getListPets, getPets, offsetPetsPage } from "enteties/PetsRegistered";
import { Pets } from "enteties/PetsRegistered/model/type/type";
import { NavLink } from "react-router-dom";
import dog_petsList from "shared/assests/dog_petsList.png"

const PetsList = () => {
    const dispatch = useAppDispatch();

    const [currentPage, setCurrentPage] = useState(1);
    const pets = useSelector(getListPets); //получение данных из стора
    const maxcount: number = 9;

    const offset = useSelector(offsetPetsPage);
    useEffect(() => {
        dispatch(getPets({page: currentPage, limit: 9}));
    }, [dispatch, currentPage])


    const handleNextPage = () => {
        if (pets && pets.length >= maxcount) {
            setCurrentPage(prevPage => prevPage + 1);
        }
        
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    return (
        <div className={cls.PetsPage}>
            <div className={cls.MainPetsList}>
                <div className={cls.char_bg_blue}></div>
                <h1 className={cls.main_text}>Наши питомцы</h1>
                <img className={cls.MainPetImage} src={dog_petsList} alt="MainDog" />
                <div className={cls.char_bg_purple}>Мы покажем Вам наших питомцев</div>
            </div>
            <div className={cls.char_bg_orange}></div>
            <div className={cls.char_bg_cyan}></div>
            <div className={cls.char_bg_green}></div>
            {pets && pets.length > 0 ? (
                <div className = {cls.PetsGrid}>
                    {pets.map((item) => (
                        <NavLink to={'../pet/'+item.id} className={cls.PetsNavlink}>
                            <div key = {item.id} className = {cls.PetsItem}>
                                    <img src = {item.picturePet} alt = {`pets-${item.id}`} className = {cls.PetsImage} />
                                    <div className={cls.PetsDiscription}>
                                        <div>
                                            <p className = {cls.PetsFact}> <b>{item.petName}</b> (<u>{item.genderPet}</u>) </p>
                                            <p className = {cls.PetsFact}> <i>{item.breedPet}</i> </p>
                                        </div>
                                        <p className = {cls.PetsFact}> <i>{item.agePet}</i> </p>
                                    </div>
                            </div>
                        </NavLink>
                    ))}    
                </div>
            ) : (
                <p>No pets available</p>
            )}
        
            <div className={cls.Pagination}>
                <button onClick={handlePreviousPage} disabled={currentPage === 1} className={cls.PageButton}>
                    Назад
                </button>
                <button onClick={handleNextPage} disabled= {pets && pets.length < maxcount} className={cls.PageButton}>
                    Далее
                </button>
            </div>
        </div>
    )
}
export default PetsList;