import React from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';
import style from './bannerSlide.module.scss';

const cx = classNames.bind(style);
const BannerIMG = ({ img, title, descrip }) => {
    return (
        <div className={cx('container')}>
            <img src={img} alt='img tour vnxpedia' className={cx('img')} />
            <div className={cx('text')} >
                <h1>{title}</h1>
                {descrip && <p>{descrip}</p>}
            </div>
        </div>
    )
}

export default BannerIMG