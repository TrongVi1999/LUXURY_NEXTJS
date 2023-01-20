import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import style from '@/styles/Tourdetail.module.scss';
import Image from 'next/image';

const cx = classNames.bind(style);

const Imglist = ({ data }) => {
    return (
        <div className={cx('list-img')}>
            <img src={data} alt='img vnxpedia tour' className={cx('img1')} />
            <div className={cx('list-right')}>
                <img src={data} alt='img vnxpedia tour' className={cx('img2')} />
                <img src={data} alt='img vnxpedia tour' className={cx('img2')} />
                <img src={data} alt='img vnxpedia tour' className={cx('img2')} />
            </div>
        </div>
    )
}

export default Imglist