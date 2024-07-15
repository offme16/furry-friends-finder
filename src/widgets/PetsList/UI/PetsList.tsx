import cls from './PetsList.module.scss';
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { FC } from "react";
import { Pets, PetsRegisteredSchema } from "enteties/PetsRegistered";
import { PetsRegisteredActions } from "enteties/PetsRegistered";
import Loader from "shared/UI/Loader/Loader";
import Pagination from "shared/UI/Pagination/Pagination";
import { PetListItem } from '../PetListItem';

const PetsList: FC<PetsRegisteredSchema> = ({result, page, limit, isLoading}) => {
    const dispatch = useAppDispatch();

    const handleSetPage = (page: number) => {
        dispatch(PetsRegisteredActions.setPage(page));
    };
    const loader = isLoading ? <div className={cls.spinner}><Loader /></div> : null;
    return (
        <div className = {cls.PetsList}>
            {loader}
            {result && result.length > 0 ? (
                <div className = {`${cls.PetsGrid} ${isLoading ? cls.loading : null}`}>
                    {result?.map((pet: Pets) => (
                        <PetListItem key={pet.id} pet={pet} />
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
                className= {cls.Pagination}
            />
        </div>
    )
}
export default PetsList;