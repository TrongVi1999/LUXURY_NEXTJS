import React from 'react';
import classNames from 'classnames/bind';
import style from './style.module.scss';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { ImFire } from 'react-icons/im';

import Link from 'next/link';

const cx = classNames.bind(style);

const Hotelcard = ({ data }) => {
    return (
        <Link href={`/hotel-detail/1`} className={cx('card')}>
            <div className={cx('card-img')}>
                <Image src={data.img} alt="vnxpedia-tour-img" className={cx('img')} />
            </div>
            <div className={cx('infor')}>
                <h6 className={cx('title')}>{data.title.toUpperCase()}</h6>
                <p className={cx('rate')}>
                    <span className={cx('rating')}>
                        <AiFillStar /> 4.8
                    </span>
                    <span className={cx('ratecount')}>
                        (1000 rate) | 1000 book
                    </span>
                </p>


                <p className={cx('price')}>
                    <span className={cx('price1')}>$ {1500 - ((1500 * data.sale) / 100)}</span> <ImFire />${' '}
                    <span className={cx('price2')}>1500</span>
                </p>

            </div>
        </Link>
    )
}

export default Hotelcard