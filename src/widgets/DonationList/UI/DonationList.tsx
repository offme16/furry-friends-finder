import { getDonations, getDonationsData, offsetDonationsPage, DonationsFeedSliceActions } from '../../../enteties/DonationFeed';
import { useSelector } from "react-redux";
import cls from './DonationList.module.scss';
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useEffect } from "react";
import donationDog from "../../../shared/assests/donationList/donationDog.svg";
import { DonationListItem } from '../DonationListItem';
import { Donations } from 'enteties/DonationFeed/model/type/type';
import { off } from 'process';



const DonationList = () => {
    const dispatch = useAppDispatch();

    const offset = useSelector(offsetDonationsPage);

    useEffect(() => {
        dispatch(getDonations(offset));
    }, [dispatch, offset.page])

    const handleSetPage = (page: number) => {
        if(page > 0)
        dispatch(DonationsFeedSliceActions.setPage(page));
    };

    const donations = useSelector(getDonationsData); //получение данных из стора

    return (
        <div className={cls.DonationList}>
            <header>
                <div className={cls.title}>
                    <h1>Ты можешь помочь нам!</h1>
                </div>
                <div className={cls.img_dog_bg}></div>
                <img className={cls.img_dog} src={donationDog} alt="donation dog" />
                <div className={cls.dog_char}>
                    <h2>
                        Здесь ты можешь помочь нам и нашим пушистым друзьям!
                    </h2>
                </div>
            </header>
            <div className={cls.donation_list_container}>
                <span onClick={() => handleSetPage(offset.page - 1)}>B--</span>
                <div className={cls.donation_card_container}>
                    {donations?.map((donation: Donations) => (
                        <DonationListItem key={donation.id} donation={donation} />
                    ))}
                </div>
                <span onClick={() => handleSetPage(offset.page + 1)}>--B</span>
            </div>

            <div className={cls.pagination}></div>
        </div>)
}
export default DonationList;