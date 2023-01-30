import React from 'react';
import classNames from 'classnames/bind';
import style from '@/styles/blogdetail.module.scss';
import Share from '../Share/Share';

const cx = classNames.bind(style);

const data = {
    avatar: '',
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

            </div>
            <p>{data.auname}</p>
            <p>{data.class}</p>
            <Share />
            <p>{data.about}</p>

        </div>
    )
}

export default Author 