import React from 'react';
import classNames from 'classnames/bind';
import style from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const cx = classNames.bind(style);

const Countrycard = ({ data }) => {
    return (
        <div className={cx('card-main')}>
            <div className={cx('img')}>
                <Image src={`https://vnxpedia.3i.com.vn${data.gallery}`} alt="vietnam-Luxuryvietravel" className={cx('imgIMG')} layout="responsive" width={0}
                    height={0} />
            </div>
            <div className={cx('text')}>
                <h2 className={cx('title')}>{data.title.toUpperCase()}</h2>
                <p className={cx('content')}>

                    We are proudly the Best Inside Travel DMCs & Tour Operators in each destination where you travel to, our local professional team is always by your side & take care of your trip from start to end to make your tour incredible & unforgettable experiences...
                </p>
                <Link href={`/destination/${data.title.replace(' ', '')}`} className={cx('link')}>
                    FIND A {data.title.toUpperCase()} TOUR
                </Link>
            </div>
        </div>
    );
};

export default Countrycard;
