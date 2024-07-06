import { DonationsFeedSliceActions } from 'enteties/DonationFeed';
import cls from './DonationListItem.module.scss';
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { Donations } from 'enteties/DonationFeed';
import Button from 'shared/UI/Button/Button';

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
            <div className={cls.card_flipper}>
                <img className={cls.donationImg} src={donation.img} alt={donation.name} />
                <div className={cls.card_description}> {donation.description} </div>
            </div>
            <div className={cls.donationDetails}>
                <h3 className={cls.donationName}>
                    {donation.name}
                </h3>
                <p className={cls.donationCost}>
                    Цена: {donation.cost} &#8381;.
                </p>
                <Button disabled={donation.count === 0} onClick={handleDecreaseCount} className={cls.donate_btn}>
                    -
                </Button>
                <span className={cls.donationCount}>
                    Количество: {donation.count}
                </span>
                <Button onClick={handleIncreaseCount} className={cls.donate_btn}>
                    +
                </Button>
            </div>
            {/* <p className={cls.total}>Итого: {donation.count * donation.cost} &#8381;</p> */}
        </div>)
}
export default DonationListItem;