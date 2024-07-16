import cls from './PetsList.module.scss';
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { FC } from "react";
import { PetsRegisteredSchema } from "enteties/PetsRegistered";
import { NavLink } from "react-router-dom";
import { PetsRegisteredActions } from "enteties/PetsRegistered";
import Loader from "shared/UI/Loader/Loader";
import Pagination from "shared/UI/Pagination/Pagination";

const PetsList: FC<PetsRegisteredSchema> = ({result, page, limit, isLoading}) => {
    const dispatch = useAppDispatch();

    const handleSetPage = (page: number) => {
        dispatch(PetsRegisteredActions.setPage(page));
    };

    return (
        <div className={cls.PetsList}>
            {isLoading ? <Loader /> : result && result.length > 0 ? (
                <div className = {cls.PetsGrid}>
                    {result.map((item) => (
                        <NavLink to={'../pet/'+item.id} className={cls.PetsNavlink}>
                            <div key = {item.id} className = {cls.PetsItem}>
                                    <img src = {item.picturePet[0]} alt = {`pets-${item.id}`} className = {cls.PetsImage} />
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
            <Pagination
                currentPage={page}
                totalItems={result ? result.length : 0}
                maxcount={limit}
                onPageChange={handleSetPage}
            />
        </div>
    )
}
export default PetsList;