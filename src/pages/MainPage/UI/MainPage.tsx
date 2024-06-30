import Button from 'shared/UI/Button/Button';
import cls from './MainPage.module.scss'
import Input from 'shared/UI/Input/Input';
import dog from '../../../shared/assests/dog.svg';
import dog_2 from '../../../shared/assests/dog_2.png';
import phone from '../../../shared/assests/phone.svg';
import email from '../../../shared/assests/email.svg';
import github from '../../../shared/assests/github.svg';
import { NavLink } from 'react-router-dom';
const MainPage = () => {

    return (
        <div className={cls.MainPage}>
            <section className={cls.head}>
                <div className={cls.char}></div>
                <div className={cls.title}>
                    <h1>Счастье ближе,<br /> чем вы думаете</h1>
                    <NavLink to={'./search'}><Button>Найти питомца!</Button></NavLink>
                </div>
                <div className={cls.bg}>
                    <div className={cls.char_bg}></div>
                    <img className={cls.bg_img} src={dog} alt='dog' />
                </div>
            </section>
            <section className={cls.contacts}>
                {/* Нужно стилизовать вот этот блок div */}
                <div className={cls.contactsTitle}>
                    <h1>Наши контакты</h1>
                    <div className={cls.circleBlue}></div>
                    <img className={cls.petImage} src={dog_2} alt="Dog" />
                    <div className={cls.circlePurple}>Остались вопросы? Свяжитесь с нами
                        любым удобным для вас способом или оставьте заявку.</div>
                </div>
                <div className={cls.containers}>
                    <div className={cls.title}>
                        <h2>Оставьте заявку</h2>
                        <form className={cls.form}>
                            <Input type="number" placeholder="Телефон" className={cls.Input} children='Введите номер телефона:'></Input>
                            <br />
                            <Input type="email" placeholder="Email" className={cls.Input} children='Вы можете указать Email, если хотите получать рассылку:'></Input>
                            <br />
                            <Button type="submit">Отправить</Button>
                        </form>
                    </div>
                    <div className={cls.contactBlock}>
                        <h2>Свяжитесь с нами</h2>
                        <div className={cls.contactItem}>
                            <a href="tel:+79999999999">
                                <img src={phone} className={cls.icon} alt="Phone" />
                                <p className={cls.contactText}>+7 999 999-99-99</p>
                            </a>
                        </div>
                        <div className={cls.contactItem}>
                            <a href="email:FindPets@gmail.com">
                                <img src={email} className={cls.icon} alt="Phone" />
                                <p className={cls.contactText}>FindPets@gmail.com</p>
                            </a>
                        </div>
                        <div className={cls.contactItem}>
                            <a href="https://github.com/offme16/furry-friends-finder">
                                <img src={github} className={cls.icon} alt="Phone" />
                                <p className={cls.contactText}>GitHub</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MainPage; 