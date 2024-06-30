import cls from './PetPage.module.scss';
import { PetsList } from 'widgets/PetsList';

const PetPage = () => {
    return (
        <div className={cls.PetPage}>
            <PetsList />
        </div>
    )
}

export default PetPage;