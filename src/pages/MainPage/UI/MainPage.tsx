import Button from 'shared/UI/Button/Button';
import cls from './MainPage.module.scss'
import Input from 'shared/UI/Input/Input';
import dog from '../../../shared/assests/dog.svg';
import phone from '../../../shared/assests/phone.svg';
import email from '../../../shared/assests/email.svg';
import github from '../../../shared/assests/github.svg';
import { NavLink } from 'react-router-dom';
import { DonationList } from 'widgets/DonationList';
import dog_petsList from "shared/assests/dog_petsList.png"
import { PetsList } from 'widgets/PetsList';
import { useSelector } from 'react-redux';
import { getPets, PetsData } from 'enteties/PetsRegistered';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

const MainPage = () => {
    const dispatch = useAppDispatch();
    const PetsInfo = useSelector(PetsData);
    const {result, page, limit, isLoading} = PetsInfo;

    useEffect(() => {
        dispatch(getPets({page, limit}));
    }, [dispatch, page]);

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

           <section className={cls.pets}>
            <div className={cls.pets_container}>
            <div className={cls.MainPetsList}>
                <div className={cls.char_bg_blue}></div>
                <h2 className={cls.main_text}>Наши питомцы</h2>
                <img className={cls.MainPetImage} src={dog_petsList} alt="MainDog" />
                <div className={cls.char_bg_purple}>Мы покажем Вам наших питомцев</div>
            </div>
            <div className={cls.char_bg_orange}></div>
            <div className={cls.char_bg_cyan}></div>
            <div className={cls.char_bg_green}></div>
            </div>
            
            <PetsList result={result} page={page} limit={limit} isLoading={isLoading}/>
           </section>

            <DonationList />

            {/* todo: добавить заголовок "Контакты", картинку
                и текст что-то вроде "Остались вопросы? Свяжитесь с нами 
                любым удобным для вас способом или оставьте заявку" */}
            {/* problem: нужно, чтобы этот всё было выше блоков
                "Оставьте заявку" и "Свяжитесь с нами". У меня это сделать не получилось :( 
                Он либо слева этих блоков, либо всё куда-то едет или теряются стили, 
                а дублировать их не хочется*/}

            <section className={cls.contacts}>
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
                    <h1>Свяжитесь с нами</h1>
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
            </section>
        </div>

    )
}

export default MainPage; 