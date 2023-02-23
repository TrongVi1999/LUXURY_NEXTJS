import React from 'react'
import classNames from 'classnames/bind';
import style from './style.module.scss';
import Link from 'next/link';

const cx = classNames.bind(style);

const HandToast = ({ click }) => {
    return (
        <div className={cx('container')}>
            <div className={cx('main')}>
                <h3>BOOKING SUCCESS !</h3>
                <p>Thank you for choosing our transportation service.We will get in touch with you soon.<br /> Would you like to consider our luxurious hotel booking service as well?</p>
                <div className={cx('list-btn')}>
                    <Link href='/luxury-hotel' className={cx('btn')}>YES</Link>
                    <Link href='/luxury-transfer' className={cx('btn')} onClick={() => click(false)}>NO</Link>
                </div>
            </div>
        </div>
    )
}

export default HandToast