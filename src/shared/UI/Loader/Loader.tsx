import React from 'react';
import './Loader.scss';
import clsx from 'clsx';

export interface LoaderProps {
    className?: string;
}

const Loader = ({ className }: LoaderProps) => (
    <div className={clsx('lds-spinner')}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
);

export default Loader;