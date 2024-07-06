import React from 'react';
import Button from 'shared/UI/Button/Button';
import clsx from 'clsx';
import cls from './DonationError.module.scss';
import { getDonations, offsetDonationsPage } from 'enteties/DonationFeed';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

export interface DonationErrorProps {
    className?: string;
}
const DonationError = ({ className }: DonationErrorProps) => {
    const dispatch = useAppDispatch();
    const offset = useSelector(offsetDonationsPage);

    
    const reloadDonations = () => {
        dispatch(getDonations(offset));
    };

    return (
        <div className={clsx(cls.DonationError, {}, [className])}>
            <h1>Произошла ошибка!</h1>
            <Button onClick={reloadDonations}>
            Попробовать снова
            </Button>
        </div>
    );
};

export default DonationError;