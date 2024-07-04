import { DonationsFeedSliceActions } from 'enteties/DonationFeed';
import cls from './BusketItem.module.scss';
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { Donations } from 'enteties/DonationFeed';
import Button from 'shared/UI/Button/Button';

interface BusketItemProps {
    donation: Donations;
}


const BusketItem: React.FC<BusketItemProps> = ({ donation }) => {
    const dispatch = useAppDispatch();
    const handleIncreaseCount = () => {
        dispatch(DonationsFeedSliceActions.increaseDonationCount(donation));
    };
    const handleDecreaseCount = () => {
        dispatch(DonationsFeedSliceActions.decreaseDonationCount(donation));
    };

    const handleRemoveBusketItem = () => {
        dispatch(DonationsFeedSliceActions.removeItem(donation));
        console.log(donation)
    };
    
    return (
        <div className={cls.BusketItem}>
            <div className={cls.basketCard}>
                <img className={cls.basketImg} src={donation.img} alt={donation.name} />
                <div className={cls.basketDetails}>
                    <h3 className={cls.basketName}>{donation.name}</h3>
                    <p className={cls.basketCost}>Цена: {donation.cost} &#8381;.</p>
                    <p className={cls.basketCount}>Количество: {donation.count}</p>
                    <p className={cls.subTotalCost}>{donation.count * donation.cost} &#8381;</p>
                    <div className={cls.basketActions}>
                        <Button className={cls.basketButton} onClick={handleDecreaseCount}>
                            -
                        </Button>
                        <Button className={cls.basketButton} onClick={handleIncreaseCount}>
                            +
                        </Button>
                    </div>
                    <span onClick={handleRemoveBusketItem} className={cls.remove_card}>&#128465;</span>
                </div>
            </div>
        </div>)
}
export default BusketItem;