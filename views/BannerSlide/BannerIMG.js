import React from 'react';
import classNames from 'classnames/bind';
import Image from 'next/image';
import style from './bannerSlide.module.scss';

const cx = classNames.bind(style);
const BannerIMG = ({ img, title, descrip, bg }) => {
    return (
        <div className={cx('container')}>
            <Image src={img} alt='img tour vnxpedia' className={cx('img')} />
<<<<<<< HEAD
            <div className={cx('text-img')} >
=======
            <div className={cx('text-img')} id={bg}>
>>>>>>> 075d2864159a36e049320b88fada5978e2239b7a
                <h1>{title}</h1>
                {descrip && <p>{descrip}</p>}
            </div>
        </div>
    )
}

export default BannerIMG