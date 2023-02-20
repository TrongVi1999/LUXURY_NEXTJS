import React from 'react';
import classNames from 'classnames/bind';
import style from './style.module.scss';
import Image from 'next/image';
import { BsChat } from 'react-icons/bs';
import TitleLine from '@/components/TitleLine';

const cx = classNames.bind(style);

const Blogcard3 = ({ data }) => {
    return (
        <div className={cx('blogcard3')}>
            <Image src={data.banner} alt='blog-travel' />
            <div className={cx('blog-infor')}>
                <TitleLine text={data.type} color='white' />

                <h2 className={cx('blog-title')}>{data.title.toUpperCase()}</h2>
                <p className={cx('blog-by')}>by <span>{data.author}</span></p>
                <p className={cx('month')}>November</p>
                <h2 className={cx('day')}>30</h2>
                <p className={cx('num-cm')}><BsChat /> 20</p>
            </div>
        </div>
    )
}

export default Blogcard3