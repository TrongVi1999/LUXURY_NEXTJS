import React from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';
import style from './bannerSlide.module.scss';
import TitleLine from '@/components/TitleLine';

const cx = classNames.bind(style);
const BannerIMG = ({ img, title, descrip, bg, type, date, by, number }) => {
    return (
        <div className={cx('container')}>
            <Image src={img} alt='img tour vnxpedia' className={cx('img')} layout="fill" />
            <div className={cx('text-img')} id={bg}>
                {type && <TitleLine text={type} color='black' />}
                <h1>{title}</h1>
                {descrip && <p className={cx('text-des')}>{descrip}</p>}
            </div>
        </div>
    )
}

export default BannerIMG