import React from 'react';
import classNames from 'classnames/bind';
import style from '@/styles/blogdetail.module.scss';
import Share from '../Share/Share';
import icon1 from '@/public/images/avt2.png';
import Image from 'next/image';
const cx = classNames.bind(style);

const data = {
    avatar: icon1,
    auname: 'NATASHA S.',
    class: 'Co-Founder',
    about: `Lorem ipsum dolor sit 
    amet, consectetur adi
    piscing accumsan`
}

const Author = () => {
    return (
        <div className={cx('author-container')}>
            <div className={cx('author-avt')}>
                < Image src={icon1} />
            </div>
            <p>{data.auname}</p>
            <p>{data.class}</p>
            <Share />
            <p>{data.about}</p>

        </div>
    )
}

export default Author 