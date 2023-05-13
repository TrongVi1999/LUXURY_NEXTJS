import React from 'react'
import classNames from 'classnames/bind';
import style from './style.module.scss';
import Image from 'next/image';
import imgbn from '@/public/images/bnn1.jpg'

const cx = classNames.bind(style);
const Start = () => {
    return (
        <div className={cx('start')}>
            <Image className='image-start' src={imgbn} alt='beach' layout='responsive' />
            <div className={cx('text')}>
                <h4>We know luxury holidays</h4>
                <p>Unparalled, tailor-made luxury trips with expert service .For Us ,Every Thing ,Matter</p>
                <p>Now let's start your first step!</p>
                <div className={cx('grid-btn')}>
                    <button className={cx('button-style')}>Most Popular</button>
                    <button className={cx('button-style')}>By Destination</button>
                    <button className={cx('button-style')}>By Type</button>
                    <button className={cx('button-style')}>View All</button>
                </div>
                <p>Start a memorable experience!</p>
            </div>
        </div>
    )
}

export default Start