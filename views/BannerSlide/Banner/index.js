import React from 'react';
import classNames from 'classnames/bind';
import style from './banner.module.scss';
import Image from 'next/image';

const cx = classNames.bind(style);

const Banner = ({ image, className, title, description }) => {
    console.log('img', image)
    return (
        <div className={cx('banner-container')}>


            <Image src={image} alt="luxury-travel" className={cx('banner', { [className]: className })} width='2000' height='1000' loading='eager' />
        </div>
    );
};

export default Banner;
