import React from 'react';
import style from './Introduce2.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';
import gt2 from '@/public/gt2.png';

const cx = classNames.bind(style);

const Introduce2 = () => {
    return (
        <div className={cx('container')}>
            <div className={cx('img')}>
                <Image src={gt2} className={cx('imgIMG')} alt='img-Introduce' layout='responsive' />
            </div>

            <div className={cx('h2')}>
                <h2>
                    BESPOKE LUXURY & PRIVATE HOLIDAYS IN VIETNAM AND INDOCHINA
                    {/* WE OFFER LUXURY PRIVATE TOURS TO SOUTHEAST ASIA */}
                </h2>
            </div>
            <div className={cx('text')}>
                <p>
                    <span>Luxuryvietravel </span>is a pioneer in providing exclusive, private, and diverse travel products to discerning travelers.
                    <br /> We are proud to have brought absolute satisfaction to the most demanding customers through our system of Vietnam and Indochina travel products over the past period. All you need to do is let us know your desired travel experience, whether it be Adventure travel, Wellness & treatment, Vietnam luxury vacations, or Vietnam MICE travel programs. Here - with <span>Luxuryvietravel </span>, you will receive the highest value for your choice.
                </p>

            </div>
        </div>
    );
};

export default Introduce2;

