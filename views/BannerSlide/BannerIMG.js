import React from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';
import style from './bannerSlide.module.scss';

const cx = classNames.bind(style);
const BannerIMG = ({ img, title, descrip, bg, className }) => {
    return (
        <div className={cx('container', { [className]: className })}>
            <Image src={img} alt='img tour vnxpedia' className={cx('img')} layout="fill" />
            <div className={cx('text-img')} id={bg}>
                <h1>{title}</h1>
                {descrip && <p>{descrip}</p>}
            </div>
        </div>
    )
}

export default BannerIMG