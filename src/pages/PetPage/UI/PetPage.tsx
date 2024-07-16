import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import cls from "./PetPage.module.scss";
import Button from "shared/UI/Button/Button";
import { NavLink, useParams } from "react-router-dom";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { PetsData, getPet} from "enteties/PetsRegistered";
import { VolunteerData, getVolunteers } from "enteties/VolunteersRegistered";
import { VolunteerCard } from "widgets/VolunteerCard";

const PetPage = () => {
  const { id } = useParams<{ id: string }>();
  const pets = useSelector(PetsData);
  const dispatch = useAppDispatch();
  const volunteerData = useSelector(VolunteerData);

  const pet = pets.result?.find(item => item.id === id);

  useEffect(() => {
    if (!pet && id) {
      dispatch(getPet(Number(id)));
    }
    if (pet?.ownerID) {
      dispatch(getVolunteers(pet.ownerID));
    }
  }, [dispatch, pet?.ownerID]);

  return (
    <div className={cls.PetPage}>
      <NavLink to="../search">
        <Button className={cls.btnBack} type="submit">
          Назад
        </Button>
      </NavLink>
      {pet && (
        <>
          <div>
            <h2>{pet.petName} ({pet.city})</h2>
            <img src={pet.picturePet} className={cls.image} alt="picturePet" />
          </div>
          <div>
            <h2>Основная информация</h2>
            <table>
              <tbody>
                <tr>
                  <td>Город:</td>
                  <td>{pet.city}</td>
                </tr>
                <tr>
                  <td>Кличка:</td>
                  <td>{pet.petName}</td>
                </tr>
                <tr>
                  <td>Пол:</td>
                  <td>{pet.genderPet}</td>
                </tr>
                <tr>
                  <td>Возраст:</td>
                  <td>{pet.agePet}</td>
                </tr>
                <tr>
                  <td>Порода:</td>
                  <td>{pet.breedPet}</td>
                </tr>
                <tr>
                  <td>Окрас:</td>
                  <td>{pet.colorPet}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={cls.features}>
            <h2>Особенности</h2>
            <ul>
              {pet.features.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          {volunteerData && volunteerData.length > 0 && (
            <VolunteerCard volunteer={volunteerData[0]} />
          )}
          <div>
            <h2>Описание</h2>
            <div className={cls.description}>{pet.description}</div>
          </div>
        </>
      )}
      <Button className={cls.btnCall} type="submit">
        Связаться
      </Button>
    </div>
  );
};

export default PetPage;
