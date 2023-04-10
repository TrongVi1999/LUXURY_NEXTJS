import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import style from './style.module.scss';
import Countrycard from './Countrycard';
import { GetAllCountry } from '@/pages/api/QuerryAPI';


const cx = classNames.bind(style);

const Country = () => {
    const { data, isLoading, error } = GetAllCountry();
    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }
    return (
        <div >
            <div className={cx('container')}>
                <div className={cx('grid')}>
                    <Countrycard data={data[0]} />
                </div>
                <div className={cx('form-grid')}>
                    <div className={cx('card')}>
                        <Countrycard data={data[1]} />
                    </div>
                    <div className={cx('card')}>
                        <Countrycard data={data[2]} />
                    </div>
                    <div className={cx('card')}>
                        <Countrycard data={data[3]} />
                    </div>
                    <div className={cx('card')}>
                        <Countrycard data={data[4]} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Country;
