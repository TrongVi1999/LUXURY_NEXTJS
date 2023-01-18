import React from 'react';
import classNames from 'classnames/bind';
import style from './style.module.scss';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { ImFire } from 'react-icons/im';
import { BsCalendarWeek } from 'react-icons/bs';
import { SlLocationPin } from 'react-icons/sl';

const cx = classNames.bind(style);

const Tourcard1 = ({ data }) => {
    return (
        <div className={cx('card')}>
            <Image src={data.img} alt="vnxpedia-tour-img" className={cx('img')} />
            <div className={cx('infor')}>
                <h6 className={cx('title')}>{data.title.toUpperCase()}</h6>
                <p className={cx('rate')}>
                    <span className={cx('rating')}>
                        <AiFillStar /> 4.8
                    </span>
                    <span className={cx('ratecount')}>
                        ({data.ratecount} rate) | {data.book} book
                    </span>
                </p>

                <p className={cx('length')}>
                    <BsCalendarWeek /> {data.long} Day
                </p>
                <p className={cx('price')}>
                    <span className={cx('price1')}>$ {(data.price * data.sale) / 100}</span> <ImFire />${' '}
                    <span className={cx('price2')}>{data.price}</span>
                </p>
                <p className={cx('place')}>
                    <SlLocationPin />
                    {data.destination}
                </p>
            </div>
        </div>
    );
};

export default Tourcard1;
