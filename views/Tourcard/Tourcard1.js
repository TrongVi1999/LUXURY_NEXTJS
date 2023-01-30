import React from 'react';
import classNames from 'classnames/bind';
import style from './style.module.scss';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { ImFire } from 'react-icons/im';
import { BsCalendarWeek } from 'react-icons/bs';
import { SlLocationPin } from 'react-icons/sl';
import ChangeTextHTML from '@/hook/ChangetextHTML';
import Link from 'next/link';

const cx = classNames.bind(style);

const Tourcard1 = ({ data }) => {
    return (
        <Link href={`/tour-detail/${data.TourCode}`} className={cx('card')}>
            <div className={cx('card-img')}>
                <img src={`https://vnxpedia.3i.com.vn${data.HightlightImg}`} alt="vnxpedia-tour-img" className={cx('img')} />
            </div>
            <div className={cx('infor')}>
                <h6 className={cx('title')}>{data.TourName.toUpperCase()}</h6>
                <p className={cx('rate')}>
                    <span className={cx('rating')}>
                        <AiFillStar /> 4.8
                    </span>
                    <span className={cx('ratecount')}>
                        (1000 rate) | 1000 book
                    </span>
                </p>

                <p className={cx('length')}>
                    <BsCalendarWeek /> {data.DETAIL.length} Day
                </p>
                <p className={cx('price')}>
                    <span className={cx('price1')}>$ {1500 - ((1500 * data.Discount) / 100)}</span> <ImFire />${' '}
                    <span className={cx('price2')}>1500</span>
                </p>
                <p className={cx('place')}>
                    <SlLocationPin />
                    {ChangeTextHTML(data.Destination)}
                </p>
            </div>
        </Link>
    );
};

export default Tourcard1;
