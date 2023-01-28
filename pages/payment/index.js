import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from '@/styles/payment.module.scss';
import BannerIMG from '@/views/BannerSlide/BannerIMG';
import ImgBn from '@/public/images/paymentbn.png';

const cx = classNames.bind(styles);

const index = () => {
    const [Content, setcontent] = useState('DEPOSIT & PAYMENT');
    return (
        <div className={cx('container')}>
            <BannerIMG img={ImgBn} title={Content} bg='bg' />
        </div>
    )
}

export default index