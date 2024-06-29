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
    const [randomPets, setRandomPets] = useState<Pets[]>([]);
    const pets = useSelector(getListPets); //получение данных из стора
    const maxcount: number = 9;

    const offset = useSelector(offsetPetsPage);
    console.log(pets?.length)
    useEffect(() => {
        dispatch(getPets({page: currentPage, limit: 9}));
    }, [dispatch, currentPage])

    useEffect(() => {
        if (pets) {
            setRandomPets(shuffleArray(pets));
        }
    }, [pets]);

    const shuffleArray = (array: Pets[]) : Pets[] => {
        let shuffledArray = array.slice();
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

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
        <div className={cls.PetsList}>
            <div className={cls.MainPetsList}>
                <div className={cls.char_bg_blue}></div>
                <div className={cls.main_text}>Наши питомцы</div>
                <img className={cls.MainPetImage} src={dog_petsList} alt="MainDog" />
                <div className={cls.char_bg_purple}>Мы покажем Вам наших питомцев</div>
            </div>
            <div className={cls.char_bg_orange}></div>
            <div className={cls.char_bg_cyan}></div>
            <div className={cls.char_bg_green}></div>
            {randomPets && randomPets.length > 0 ? (
                <div className = {cls.PetsGrid}>
                    {randomPets.map((item) => (
                        <NavLink to={'../pet/'+item.id} className={cls.PetsNavlink}>
                            <div key = {item.id} className = {cls.PetsItem}>
                                    <img src = {item.picturePet} alt = {`pets-${item.id}`} className = {cls.PetsImage} />
                                    <div className={cls.PetsDiscription}>
                                        <div>
                                            <p className = {cls.PetsFact}> {item.petName}({item.genderPet}) </p>
                                            <p className = {cls.PetsFact}> {item.breedPet} </p>
                                        </div>
                                        <p className = {cls.PetsFact}> {item.agePet} </p>
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