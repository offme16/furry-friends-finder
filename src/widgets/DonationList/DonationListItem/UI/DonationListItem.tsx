import {DonationsFeedSliceActions} from '../../../../enteties/DonationFeed';
import cls from './DonationListItem.module.scss';
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { Donations } from 'enteties/DonationFeed/model/type/type';

interface DonationListItemProps {
    donation: Donations;
}


const DonationListItem: React.FC<DonationListItemProps> = ({ donation }) => {
    const dispatch = useAppDispatch();
    const handleIncreaseCount = () => {
        dispatch(DonationsFeedSliceActions.increaseDonationCount(donation));
    };
    const handleDecreaseCount = () => {
        dispatch(DonationsFeedSliceActions.decreaseDonationCount(donation));
    };
    return (
    <div className={cls.DonationListItem}>
        <img className={cls.donationImg} src={donation.img} alt={donation.name} />
        <div className={cls.donationDetails}>
            <h3 className={cls.donationName}>{donation.name}</h3>
            <p className={cls.donationCost}>Цена: {donation.cost} руб.</p>
            <button onClick={handleDecreaseCount} className={cls.donate_btn}>-</button>
            <span className={cls.donationCount}>Количество: {donation.count}</span>
            <button onClick={handleIncreaseCount} className={cls.donate_btn}>+</button>
        </div>
        <p className={cls.total}>Итого: {donation.count * donation.cost} руб</p>
    </div>)
}
export default DonationListItem;