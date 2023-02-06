import React from 'react';
import classNames from 'classnames/bind';
import style from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const cx = classNames.bind(style);

const Countrycard = ({ data }) => {
    return (
        <div className={cx('card-main')}>
            <img src={`https://vnxpedia.3i.com.vn${data.gallery}`} alt="vietnam-vnxpedia" className={cx('img')} />
            <div className={cx('text')}>
                <h1 className={cx('title')}>{data.title.toUpperCase()}</h1>
                <p className={cx('content')}>
                    {/* {data.content} */}
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
