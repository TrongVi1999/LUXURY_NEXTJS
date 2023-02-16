import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import style from '@/styles/Tourdetail.module.scss';
import Image from 'next/image';


const cx = classNames.bind(style);

const Imglist = ({ data, issv }) => {
    // const issv = useIsServer();
    return (
        <div className={cx('list-img')}>
            <Image src={data[0]} alt='img vnxpedia tour' className={cx('img1')} width="2000"
                height='2000' />
            <div className={cx('list-right')}>
                {issv ? <img src={data[1]} alt='img vnxpedia tour' className={cx('img2')} /> : <Image src={data[1]} alt='img vnxpedia tour' className={cx('img2')} />}
                {issv ? <img src={data[2]} alt='img vnxpedia tour' className={cx('img2')} /> : <Image src={data[2]} alt='img vnxpedia tour' className={cx('img2')} />}
                {issv ? <img src={data[3]} alt='img vnxpedia tour' className={cx('img2')} /> : <Image src={data[3]} alt='img vnxpedia tour' className={cx('img2')} />}
            </div>
        </div>
    )
}

export default Imglist