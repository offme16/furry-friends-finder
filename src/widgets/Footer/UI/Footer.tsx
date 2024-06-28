import { NavLink } from "react-router-dom";
import cls from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={cls.footer}>
            <p className={cls.text}>Разработано командой №4 Летней школы Барс Груп по JavaScript</p>
            <p className={cls.text}>
                Участники команды:
                Валиуллин Булат Мансурович,
                Шерматов Азамат Акмалович,
                Сайфуллин Дамир Альмирович,
                Якупов Джамиль Рамилевич,
                Малышев Владимир Игоревич,
                Вагизов Тимур Ринатович
            </p>
        </footer>
    )
}

export default Footer;