import { useState } from "react";
import { NavLink } from "react-router-dom";
import cls from "./Header.module.scss";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={cls.header}>
            <div className={cls.burger} onClick={toggleMenu}>
                <span className={cls.burgerLine}></span>
                <span className={cls.burgerLine}></span>
                <span className={cls.burgerLine}></span>
            </div>
            <nav className={`${cls.navigate} ${menuOpen ? cls.open : ''}`}>
                <NavLink to={'/main'} onClick={() => setMenuOpen(false)}>Главная</NavLink>
                <div className={cls.dot}></div>
                <NavLink to={'/news'} onClick={() => setMenuOpen(false)}>Новости</NavLink>
                <div className={cls.dot}></div>
                <NavLink to={'/search'} onClick={() => setMenuOpen(false)}>Найти питомца</NavLink>
            </nav>
        </header>
    );
};

export default Header;
