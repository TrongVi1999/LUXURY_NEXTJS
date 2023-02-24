import React from 'react';
import classNames from 'classnames/bind';
import style from '@/styles/blogdetail.module.scss';
import Share from '../Share/Share';
import icon1 from '@/public/images/avt2.png';
import Image from 'next/image';
import { getAuthor } from '@/hook/getAuthor';

const cx = classNames.bind(style);

const Author = ({ id }) => {
    return (
        <div className={cx('author-container')}>
            <div className={cx('author-avt')}>
                < Image src={getAuthor(id).img} />
            </div>
            <div className={cx('author-content')}>
                <p>{getAuthor(id).name}</p>
                <p>{getAuthor(id).position}</p>
                {/* <Share /> */}
            </div>

        </div>
    )
}

export default Author 