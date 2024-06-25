import { NavLink } from "react-router-dom";
import cls from "./Header.module.scss";

const Header = () => {
    return (
        <header className={cls.header}>
            <nav className={cls.navigate}>
                <NavLink to={'/'}>Главная</NavLink>
                <div className={cls.dot}></div>
                <NavLink to={'/news'}>Новости</NavLink>
                <div className={cls.dot}></div>
                <NavLink to={'/search'}>Найти питомца</NavLink>
            </nav>
        </header>
    )
}

export default Header;