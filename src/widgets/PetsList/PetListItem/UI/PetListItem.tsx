import cls from './PetListItem.module.scss';
import { Pets } from 'enteties/PetsRegistered';
import { NavLink } from "react-router-dom";

interface PetListItemProps {
    pet: Pets;
}


const PetListItem: React.FC<PetListItemProps> = ({ pet }) => {
    return (
        <div className = {cls.PetListItem}>
            <NavLink to={'../pet/'+pet.id} className={cls.PetsNavlink}>
                <div key = {pet.id} className = {cls.PetsItem}>
                        <img src = {pet.picturePet} alt = {`pets-${pet.id}`} className = {cls.PetsImage} />
                        <div className={cls.PetsDiscription}>
                            <div className = {cls.PetsFact}>
                                <p> <b>{pet.petName}</b> (<u>{pet.genderPet}</u>) </p>
                                <p> <i>{pet.breedPet}</i> </p>
                            </div>
                            <p className = {cls.PetsFact}> <i>{pet.agePet}</i> </p>
                        </div>
                </div>
            </NavLink>
        </div>    
    )
}
export default PetListItem;