import { getDonations, getDonationsData, offsetDonationsPage, DonationsFeedSliceActions } from '../../../enteties/DonationFeed';
import { useSelector } from "react-redux";
import cls from './DonationList.module.scss';
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useEffect } from "react";
import { DonationListItem } from '../DonationListItem';
import { Donations } from 'enteties/DonationFeed';
import Loader from 'shared/UI/Loader/Loader';
import Button from 'shared/UI/Button/Button';
import ToPrevArrow from "shared/assests/donationList/ToPrevArrow.svg";
import toNextArrow from "shared/assests/donationList/toNextArrow.svg";
import DonationError from 'widgets/DonationError/UI/DonationError';
import { SectionHeader } from 'shared/UI/SectionHeader';
import { Pagination } from '@mui/material';
import { Thanksgiving } from 'widgets/Thanksgiving';



const DonationList = () => {
    const dispatch = useAppDispatch();

    const offset = useSelector(offsetDonationsPage);

    useEffect(() => {
        dispatch(getDonations(offset));
    }, [ offset.page])
    console.log('!')

    const handleSetPage = (page: number) => {
        if (page > 0 && page)
            dispatch(DonationsFeedSliceActions.setPage(page));
    };

    const donations = useSelector(getDonationsData); //получение данных из стора
    const loader = offset.error ? <div className={cls.spinner}><DonationError /></div> : offset.isLoading ?
        <div className={cls.spinner}>
            <Loader />
        </div> :
        null;
    const placeholders = Array(6).fill(<div className={cls.placeholder}></div>,0, offset.limit - Number(donations?.length));
    const donationItem =
        <div className={`${cls.donation_card_container} ${offset.isLoading || offset.error ? cls.loading : null}`}>
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
            {
                placeholders
            }
            <span className={cls.pagination_right} onClick={() => handleSetPage(offset.page + 1)}>
                <Button disabled={offset.page === 4} className={cls.pagination_btn}>
                    <img className={cls.pagination_icon} src={toNextArrow} />
                </Button>
            </span>
        </div>;


    return (
        <div className={cls.DonationList}>
            <SectionHeader mainText={'Ты можешь помочь нам!'} subText={'Здесь ты можешь помочь нам и нашим пушистым друзьям!'}></SectionHeader>
            <div className={cls.donation_list_container}>
                {loader}
                {donationItem}
                <Pagination
                    count={4}
                    page={offset.page}
                    hidePrevButton
                    hideNextButton
                    onChange={(_, num) => handleSetPage(num)}
                />
            </div>
            {/* <Thanksgiving /> */}
        </div>)
}
export default DonationList;