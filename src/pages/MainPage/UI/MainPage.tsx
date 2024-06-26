import Button from 'shared/UI/Button/Button';
import cls from './MainPage.module.scss'
import Input from 'shared/UI/Input/Input';
import dog from '../../../shared/assests/dog.svg';
import { NavLink } from 'react-router-dom';
import { DonationList } from 'widgets/DonationList';
const MainPage = () => {

    return (
        <div className={cls.MainPage}>
            <section className={cls.head}>
                <div className={cls.char}></div>
                <div className={cls.title}>
                    <h1>Cчастье ближе,<br /> чем вы думаете</h1>
                    <NavLink to={'./search'}><Button>Найти питомца!</Button></NavLink>
                </div>
                <div className={cls.bg}>
                    <div className={cls.char_bg}></div>
                    <img className={cls.bg_img} src={dog} alt='dog' />
                </div>
            </section>
            <DonationList></DonationList>
        </div>

    )
}

export default MainPage; 