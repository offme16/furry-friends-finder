import React from 'react';
import { useSelector } from 'react-redux';
import cls from './PetPage.module.scss';
import Button from 'shared/UI/Button/Button';
import { NavLink } from 'react-router-dom';

const PetPage = () => {

    // const pets = useSelector(getListPets);
    // const pet = pets?.find(e => e.id === id)

    return (
        <div className={cls.PetPage}>
            <NavLink to={'../search'}><Button className={cls.btnBack} type="submit">Назад</Button></NavLink>
            <div>
                <h2>$petName ($city)</h2>
                <img src={''} className={cls.img} alt="$picturePet" />
            </div>
            <div>
                <h2>Основная информация</h2>
                <table>
                    <tr><td>Город:</td><td>$city</td></tr>
                    <tr><td>Кличка:</td><td>$petName</td></tr>
                    <tr><td>Пол:</td><td>$genderPet</td></tr>
                    <tr><td>Возраст:</td><td>$agePet</td></tr>
                    <tr><td>Порода:</td><td>$breedPet</td></tr>
                    <tr><td>Окрас:</td><td>$colorPet</td></tr>
                </table>
            </div>
            <div className={cls.features}>
                <h2>Особенности</h2>
                <ul>
                    <li>$features</li>
                    <li>$features</li>
                    <li>$features</li>
                    <li>$features</li>
                </ul>
            </div>
            <div>
                <h2>Описание</h2>
                <div className={cls.description}>$description Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, mollitia asperiores ipsa quae tenetur odit itaque quod cupiditate dolores nesciunt explicabo enim in vitae est similique nisi animi inventore provident.</div>
            </div>
            <Button className={cls.btnCall} type="submit">Связаться</Button>
        </div>
    )
}

export default PetPage;