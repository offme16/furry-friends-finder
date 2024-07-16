import cls from './Busket.module.scss'
import { useState } from 'react';
import { BusketItem } from '../BusketItem';
import { useSelector } from 'react-redux';
import { getBusketData } from 'enteties/DonationFeed';
import { Donations } from 'enteties/DonationFeed';
import BusketEmpty from 'shared/assests/Busket/BusketEmpty.png'
import busketIcon from 'shared/assests/Busket/busket.svg'
import Button from 'shared/UI/Button/Button';
import { ModalView } from 'shared/UI/ModalView/modalView';
import { Thanksgiving } from 'shared/UI/Thanksgiving';
import { DonationsFeedSliceActions } from 'enteties/DonationFeed';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

const Busket = () => {
    const dispatch = useAppDispatch();
    const [isClicked, setIsClicked] = useState(false);
    const busket = useSelector(getBusketData); //получение данных из стора
    const [modalInfoIsOpen, setModalinfoIsOpen] = useState(false)

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    const handleDonateClick = () => {
        if(busket?.length){
            setModalinfoIsOpen(true)
            dispatch(DonationsFeedSliceActions.dropBusket())
        }
    }

    const handleBackgroundClick = () => {
        setIsClicked(false);
    };


    const busketClass = isClicked ? `${cls.busket_body} ${cls.open_busket}` : cls.busket_body;
    const itemList = busket?.length ? busket?.map((busket: Donations) => (
        <BusketItem key={busket.id} donation={busket} />
    )) : <>
        <img className={cls.empty} src={BusketEmpty} alt="BusketEmpty" />
        <h3 className={cls.empty_text}> В корзине пусто! </h3>
    </>
    const busketItemContainer = busket?.length ? cls.busket_item_container : `${cls.busket_item_container} ${cls.empty}`


    return (
        <div >                
            <div onClick={handleBackgroundClick} className={`${cls.busket_bg} ${isClicked ? cls.open : null}`}></div>
            <div onClick={handleClick} className={cls.Busket}>
                <img src={busketIcon} alt="корзина" />
                <div className={cls.busket_count}>{busket?.length}</div>
            </div>
            <div className={busketClass}>
                <div className={busketItemContainer}>
                    {itemList}
                </div>
                <div className={cls.result_cost}>
                    {`Итого:${busket?.map(busketItem => busketItem.cost * busketItem.count).reduce((x, y) => x + y, 0)}`} &#8381;
                    <Button onClick={handleDonateClick}> Пожертвовать! </Button>
                </div>
            </div>
            <ModalView isOpen = {modalInfoIsOpen} onClose={() => {setModalinfoIsOpen(false)}}> <Thanksgiving /> </ModalView> 
        </div>)
}
export default Busket;