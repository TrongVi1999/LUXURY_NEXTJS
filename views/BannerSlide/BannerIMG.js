import React from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';
import style from './bannerSlide.module.scss';

const cx = classNames.bind(style);
const BannerIMG = ({ img, title, descrip, bg }) => {
    return (
        <div className={cx('container')}>

            <Image src={img} alt='img tour vnxpedia' className={cx('img')} />

            <div className={cx('text-img')} >

                <div className={cx('text-img')} id={bg}>

                    <Image src={img} alt='img tour vnxpedia' className={cx('img')} layout="fill" />
                    <div className={cx('text-img')} id={bg}>
                        <h1>{title}</h1>
                        {descrip && <p>{descrip}</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerIMG