import React from 'react';
import classNames from 'classnames/bind';
import style from '@/styles/bloghome.module.scss';
import Image from 'next/image';

const cx = classNames.bind(style);

const Blogcard1 = ({ Data }) => {
    return (
        <div className={cx('blog')}>
            <Image src={Data.img} alt="blog-vnxpedia" />
            <div className={cx('text-box')}>
                <p className={cx('title')}>{Data.title.toUpperCase()}</p>
                <p className={cx('hr')}></p>
                <p className={cx('content')}>{Data.content}</p>
            </div>
        </div>
    );
};

export default Blogcard1;
