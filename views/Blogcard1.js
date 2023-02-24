import React from 'react';
import classNames from 'classnames/bind';
import style from '@/styles/bloghome.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { GetlistImg } from '@/hook/GetListImg';

const cx = classNames.bind(style);

const Blogcard1 = ({ Data }) => {
    return (
        <Link href={`/blog-detail/${Data.id}`} className={cx('blog')}>
            <Image src={GetlistImg(Data.gallery)[0]} alt="blog-Luxuryvietravel" width='1000' height='1000' />
            <div className={cx('text-box')}>
                <p className={cx('title')}>{Data.title.toUpperCase()}</p>
                <p className={cx('hr')}></p>
                <p className={cx('content')}>
                    {Data.intro_text}
                </p>
            </div>
        </Link>
    );
};

export default Blogcard1;
