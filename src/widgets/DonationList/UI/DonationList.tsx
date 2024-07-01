import { getDonations, getDonationsData, offsetDonationsPage, DonationsFeedSliceActions } from '../../../enteties/DonationFeed';
import { useSelector } from "react-redux";
import cls from './DonationList.module.scss';
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useEffect } from "react";
import donationDog from "../../../shared/assests/donationList/donationDog.svg";
import { DonationListItem } from '../DonationListItem';
import { Donations } from 'enteties/DonationFeed/model/type/type';
import { off } from 'process';
import { PageError } from 'widgets/PageError';
import Loader from 'shared/UI/Loader/Loader';
import Button from 'shared/UI/Button/Button';
import ToPrevArrow from "../../../shared/assests/donationList/ToPrevArrow.svg";
import toNextArrow from "../../../shared/assests/donationList/toNextArrow.svg";



const DonationList = () => {
    const dispatch = useAppDispatch();

    const offset = useSelector(offsetDonationsPage);

    useEffect(() => {
        dispatch(getDonations(offset));
    }, [dispatch, offset.page])

    const handleSetPage = (page: number) => {
        if (page > 0 && page)
            dispatch(DonationsFeedSliceActions.setPage(page));
    };

    const donations = useSelector(getDonationsData); //получение данных из стора
    const donationItem = offset.error ?
        <PageError /> : offset.isLoading ?
            <Loader /> :
            <div className={cls.donation_card_container}>
                <span className={cls.pagination_left} onClick={() => handleSetPage(offset.page - 1)}>
                    <Button disabled={offset.page === 1} className={cls.pagination_btn}>
                        <img className={cls.pagination_icon} src={ToPrevArrow} />
                    </Button>
                </span>
                {
                    donations?.map((donation: Donations) => (
                        <DonationListItem key={donation.id} donation={donation} />
                    ))
                }
                <span className={cls.pagination_right} onClick={() => handleSetPage(offset.page + 1)}>
                    <Button disabled={offset.page === 4} className={cls.pagination_btn}>
                        <img className={cls.pagination_icon} src={toNextArrow} />
                    </Button>
                </span>
            </div>

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
                {donationItem}
            </div>
            <div className={cls.pagination}></div>
        </div>)
}
export default DonationList;