import React from 'react';
import classNames from 'classnames/bind';
import style from './style.module.scss';
import { CiTwitter, CiBasketball, CiMail } from 'react-icons/ci';
import { SlSocialFacebook } from 'react-icons/sl';

const cx = classNames.bind(style);

const Share = () => {
    return (
        <div className={cx('container')}>
            <SlSocialFacebook />
            <CiTwitter />
            <CiBasketball />
            <CiMail />
        </div>
    )
}

export default Share