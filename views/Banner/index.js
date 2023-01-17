import React from 'react';
import classNames from 'classnames/bind';
import style from './banner.module.scss';

// import Image from 'next/image';

const cx = classNames.bind(style);

const Banner = ({ image, className }) => {
    console.log('img', image);
    return (
        <>
            {/* <Image
                src={image.default.blurDataURL}
                alt="bannerError"
                className={cx('banner', { [className]: className })}
                // width={100}
                // height={40}
                priority
            /> */}
            <img src={image.default.src} alt="bannerError" className={cx('banner', { [className]: className })} />
        </>
    );
};

export default Banner;
