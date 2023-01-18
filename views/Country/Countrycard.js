import React from 'react';
import classNames from 'classnames/bind';
import style from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const cx = classNames.bind(style);

const Countrycard = ({ data }) => {
    return (
        <div className={cx('card-main')}>
            <Image src={data.img} alt="vietnam-vnxpedia" className={cx('img')} />
            <div className={cx('text')}>
                <h1 className={cx('title')}>{data.title.toUpperCase()}</h1>
                <p className={cx('content')}>{data.content}</p>
                <Link href="/" className={cx('link')}>
                    FIND A {data.title.toUpperCase()} TOUR
                </Link>
            </div>
        </div>
    );
};

export default Countrycard;
