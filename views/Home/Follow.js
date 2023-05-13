import React from 'react';
import classNames from 'classnames/bind';
import style from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa'

const cx = classNames.bind(style);

const Follow = () => {
    return (
        <div className={cx('follow')}>
            <h3 className={cx('title-h3')}>FOLLOW US</h3>
            <div className={cx('list-social')}>
                <FaFacebookSquare />
                <FaTwitter />
                <FaInstagram />
            </div>
            <h2 className={cx('title-h2')}>
                HOW CAN WE HELP?
            </h2>
            <div className={cx('hr2')}></div>
            <p className={cx('sl-text')}>Would you like to find a tour or need a support?<br />
                If you need help from our support team, contact us anytime.</p>
            <Link href='/' alt='' className={cx('link-gold')}>CONTACT US</Link>
        </div>
    )
}

export default Follow
